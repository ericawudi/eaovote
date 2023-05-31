import { useQueryClient } from "@tanstack/react-query";
import useRQMutation, {
  updateQueryCacheWithNewActor,
  API_METHODS,
} from "../../../../hooks/useRQMutation";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS, ADMIN_URLS } from "../../index/constants";

const DEFAULT_VALUES = {
  fullname: "",
  description: "",
  competition_id: 0,
  category_id: 0,
};
export default function useCreateAndEditParticipantLogic(args) {
  const queryClient = useQueryClient();
  const { addNotification, closeActionModal, participant } = args;

  // === creating a new participant ===
  const onCreateSuccess = (res) => {
    const [participant] = res.data.data;
    queryClient.setQueryData(QUERY_KEYS.PARTICIPANTS, (previousParticipants) =>
      updateQueryCacheWithNewActor(previousParticipants, participant)
    );

    addNotification({
      action: NOTIFICATION_ACTIONS.PARTICIPANT.CREATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Participant Created Successfully",
    });
  };

  const onCreateFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.PARTICIPANT.CREATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
    return closeActionModal();
  };

  const { mutate: createParticipant, isLoading: isCreateParticipantLoading } =
    useRQMutation({
      onSuccess: onCreateSuccess,
      onError: onCreateFail,
    });

  const handleCreateParticipant = (data) =>
    createParticipant({ url: ADMIN_URLS.PARTICIPANTS, data });

  // === editing a participant ===

  const onEditSuccess = () => {
    addNotification({
      action: NOTIFICATION_ACTIONS.PARTICIPANT.UPDATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Participant Edited Successfully",
    });
    queryClient.invalidateQueries(QUERY_KEYS.PARTICIPANTS);
    return closeActionModal();
  };

  const onEditFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.PARTICIPANT.UPDATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const { mutate: editParticipant, isLoading: isEditPartcipantLoading } =
    useRQMutation({
      method: API_METHODS.UPDATE,
      onSuccess: onEditSuccess,
      onError: onEditFail,
    });

  const handleEditParticipant = (data) => {
    const { id } = participant;
    const url = `${ADMIN_URLS.PARTICIPANTS}/${id}`;
    const updateData = Object.keys(data).reduce((result, key) => {
      if (data[key] !== participant[key]) result[key] = data[key];
      return result;
    }, {});

    return editParticipant({ url, data: updateData });
  };

  // === sending create and edit API request

  const onSubmit = (data) =>
    !!participant ? handleEditParticipant(data) : handleCreateParticipant(data);

  return {
    defaultValues: participant ?? DEFAULT_VALUES,
    isLoading: isCreateParticipantLoading || isEditPartcipantLoading,
    onSubmit,
  };
}
