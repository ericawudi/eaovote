import { useQueryClient } from "react-query";
import useRQMutation, { API_METHODS } from "../../../../hooks/useRQMutation";
import { useAppContext } from "../../../../contest/AppContextProvider";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS } from "./voters";
import ADMIN_URLS from "../../index/urls";

export default function useDeleteVoterLogic(close) {
  const queryClient = useQueryClient();
  const { addNotification } = useAppContext();

  const onDeleteSuccess = () => {
    queryClient.invalidateQueries(QUERY_KEYS.VOTERS);

    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.DELETE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Voter Deleted Successfully",
    });

    return close();
  };

  const onDeleteFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.DELETE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const { mutate, isLoading } = useRQMutation({
    method: API_METHODS.DELETE,
    onSuccess: onDeleteSuccess,
    onError: onDeleteFail,
  });

  const handleDelete = (id) => {
    const deleteUrl = `${ADMIN_URLS.voters}/${id}`;
    return mutate(deleteUrl);
  };
  return { isLoading, handleDelete, handleCancel: close };
}
