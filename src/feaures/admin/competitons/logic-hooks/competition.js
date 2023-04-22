import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Competitions";
const columns = ["Competition", "Created By", "Actions"];
const competitions = [
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
];

export default function useCompetitionsLogic() {
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
    state: { TITLE, columns, competitions },
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
