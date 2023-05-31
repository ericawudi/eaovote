import { useQueryClient } from "@tanstack/react-query";
import useRQMutation, { API_METHODS } from "../../../../hooks/useRQMutation";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { ADMIN_URLS, QUERY_KEYS } from "../../index/constants";

export default function useDeleteCompetitionLogic(params) {
  const { closeActionModal, addNotification } = params;
  const queryClient = useQueryClient();

  const onDeleteSuccess = () => {
    queryClient.invalidateQueries(QUERY_KEYS.COMPETITIONS);

    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITION.DELETE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Competition Deleted Successfully",
    });

    return closeActionModal();
  };

  const onDeleteFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITION.DELETE,
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
    const deleteUrl = `${ADMIN_URLS.COMPETITIONS}/${id}`;
    return mutate(deleteUrl);
  };
  return { isLoading, handleDelete, handleCancel: closeActionModal };
}
