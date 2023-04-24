import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Participants";
const columns = ["Fullname", "Competition", "Category", "Actions"];
const DUMMY_participants = [
  {
    id: "ptp001",
    fullname: "Joe James",
    competitionId: "cmp001",
    competition: "Competition A",
    categoryId: "ct001",
    category: "Category AB",
  },
  {
    id: "ptp002",
    fullname: "Joe James",
    competitionId: "cmp001",
    competition: "Competition A",
    categoryId: "ct001",
    category: "Category AB",
  },
  {
    id: "ptp003",
    fullname: "Joe James",
    competitionId: "cmp001",
    competition: "Competition A",
    categoryId: "ct001",
    category: "Category AB",
  },
];

export default function useParticipantsLogic() {
  const [selectedParticipantId, setSelectedParticipantId] = useState("");
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

  const showActionModal = openModal(setSelectedParticipantId);
  const selectedParticipant = DUMMY_participants.find(
    ({ id }) => id === selectedParticipantId
  );

  return {
    state: {
      TITLE,
      columns,
      participants: DUMMY_participants,
      selectedParticipant,
    },
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
