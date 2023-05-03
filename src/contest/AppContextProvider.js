import { useState, createContext, useContext } from "react";
import AppNotification from "../components/Notification/AppNotification";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (data) =>
    setNotifications((previousNotifications) => {
      const notification = previousNotifications.find(
        (notif) => notif.action === data.action
      );

      return notification === undefined
        ? [...previousNotifications, data]
        : previousNotifications.map((notif) =>
            notif.action === data.action ? { ...notif, ...data } : notif
          );
    });
  const removeNotification = (action) =>
    setNotifications((previousNotifications) =>
      previousNotifications.filter((notif) => notif.action !== action)
    );

  const isActive = (act) =>
    notifications.map(({ action }) => action).includes(act);

  const showNotification = notifications.map(
    ({ action, message, severity }) => (
      <AppNotification
        key={action}
        isOpen={isActive(action)}
        message={message}
        severity={severity}
        handleClose={() => removeNotification(action)}
      />
    )
  );

  const state = { notifications, addNotification };
  return (
    <AppContext.Provider value={state}>
      {showNotification}
      {children}
    </AppContext.Provider>
  );
}
