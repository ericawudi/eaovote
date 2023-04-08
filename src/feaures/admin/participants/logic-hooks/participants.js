import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Participants";
const columns = ["Fullname", "Competition", "Category", "Actions"];
const participants = [
  ["Joe James", "Competition A", "Category AB"],
  ["Joe James", "Competition A", "Category AB"],
  ["Joe James", "Competition A", "Category AB"],
  ["Joe James", "Competition A", "Category AB"],
];

export default function useParticipantLogicHook() {
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
    state: { TITLE, columns, participants },
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
