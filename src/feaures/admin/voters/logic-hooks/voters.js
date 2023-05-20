import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";
import { useFetch, getActorList } from "../../../../hooks/useFetch";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { FETCH_ON_MOUNT, QUERY_KEYS } from "../../index/constants";

const TITLE = "Voters";
const columns = ["Voter", "Fullname", "email", "Contact", "Actions"];

export default function useVotersLogic(addNotification) {
  const modalState = useModalViews();
  const [selectedVoterId, setSelectedVoterId] = useState("");

  const showActionModal = modalState.openModal(setSelectedVoterId);

  const { error, ...rest } = useFetch(QUERY_KEYS.VOTERS, FETCH_ON_MOUNT);
  const voters = getActorList(rest.data);
  const selectedVoter = voters.find(({ id }) => id === selectedVoterId);

  if (error) {
    const err = error.response?.data?.data ?? error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.FETCH_ALL,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  }

  return {
    state: { TITLE, columns, voters, selectedVoter },
    modal: modalState,
    handlers: {
      showActionModal,
      closeActionModal: modalState.closeActionModal,
    },
  };
}
