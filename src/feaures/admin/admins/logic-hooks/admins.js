import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Admins";
const columns = ["Admin", "Full Name", "Email", "Phone", "Actions"];
const admins = [
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
];

export default function useAdminLogic() {
  const [selectedAdminId, setSelectedAdminId] = useState("");
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    showDeleteContent,
    showViewContent,
    openModal,
    closeActionModal,
  } = useModalViews();
  console.log(selectedAdminId);
  const showActionModal = openModal(setSelectedAdminId);

  return {
    state: { TITLE, columns, admins },
    modal: {
      ACTIONS,
      showModal,
      showCreateContent,
      showEditContent,
      showDeleteContent,
      showViewContent,
    },
    handlers: { showActionModal, closeActionModal },
  };
}
