import { useQueryClient } from "react-query";
import useRQMutation, { API_METHODS } from "../../../../hooks/useRQMutation";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { ADMIN_URLS, QUERY_KEYS } from "../../index/constants";

export default function useDeleteVoterLogic(params) {
  const { closeActionModal, addNotification } = params;
  const queryClient = useQueryClient();

  const onDeleteSuccess = () => {
    queryClient.invalidateQueries(QUERY_KEYS.VOTERS);

    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.DELETE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Voter Deleted Successfully",
    });

    return closeActionModal();
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
    const deleteUrl = `${ADMIN_URLS.VOTERS}/${id}`;
    return mutate(deleteUrl);
  };
  return { isLoading, handleDelete, handleCancel: closeActionModal };
}
