import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Competitions";
const columns = ["Competition", "Created By", "Actions"];
const DUMMY_COMPETITIONS = [
  {
    id: "cmp001",
    adminId: "admin001",
    admin: "Eric Awudi",
    name: "Joe James",
    description: "This is a test",
  },
  {
    id: "cmp002",
    adminId: "admin001",
    admin: "Eric Awudi",
    name: "Joe James 1",
    description: "This is a test",
  },
  {
    id: "cmp003",
    adminId: "admin001",
    admin: "Eric Awudi",
    name: "Joe James 1",
    description: "This is a test",
  },
];

export default function useCompetitionsLogic() {
  const [selectedCompetitionId, setSelectedCompetitionId] = useState("");
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

  const showActionModal = openModal(setSelectedCompetitionId);
  const selectedCompetition = DUMMY_COMPETITIONS.find(
    ({ id }) => id === selectedCompetitionId
  );

  return {
    state: {
      TITLE,
      columns,
      competitions: DUMMY_COMPETITIONS,
      selectedCompetition,
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
