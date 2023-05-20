import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";
import { useFetch, getActorList } from "../../../../hooks/useFetch";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS, FETCH_ON_MOUNT } from "../../index/constants";

const TITLE = "Competitions";
const columns = ["Competition", "Created By", "Actions"];

export default function useCompetitionsLogic(addNotification) {
  const modalState = useModalViews();
  const [selectedCompetitionId, setSelectedCompetitionId] = useState("");

  const showActionModal = modalState.openModal(setSelectedCompetitionId);

  const { error, ...rest } = useFetch(QUERY_KEYS.COMPETITIONS, FETCH_ON_MOUNT);

  const competitions = getActorList(rest.data);
  const selectedCompetition = competitions.find(
    ({ id }) => id === selectedCompetitionId
  );

  if (error) {
    const err = error.response?.data?.data ?? error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITIONS.FETCH_ALL,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  }

  return {
    state: {
      TITLE,
      columns,
      competitions,
      selectedCompetition,
    },
    modal: modalState,
    handlers: {
      showActionModal,
      closeActionModal: modalState.closeActionModal,
    },
  };
}
