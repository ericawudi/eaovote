import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";
import { useFetch, getActorList } from "../../../../hooks/useFetch";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS, FETCH_ON_MOUNT } from "../../index/constants";

const TITLE = "Participants";
const columns = ["Fullname", "Competition", "Category", "Actions"];

export default function useParticipantsLogic(addNotification) {
  const modalState = useModalViews();
  const [selectedParticipantId, setSelectedParticipantId] = useState("");

  const showActionModal = modalState.openModal(setSelectedParticipantId);

  const { error, ...rest } = useFetch(QUERY_KEYS.PARTICIPANTS, FETCH_ON_MOUNT);
  const participants = getActorList(rest.data);
  const selectedParticipant = participants.find(
    ({ id }) => id === selectedParticipantId
  );

  if (error) {
    const err = error.response?.data?.data ?? error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.PARTICIPANT.FETCH_ALL,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  }

  return {
    state: {
      TITLE,
      columns,
      participants,
      selectedParticipant,
    },
    modal: modalState,
    handlers: {
      showActionModal,
      closeActionModal: modalState.closeActionModal,
    },
  };
}
