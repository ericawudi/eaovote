import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Competitions";
const columns = ["Competition", "Created By", "Actions"];
const admins = [
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
];

export default function useCompetitionLogic() {
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

  const showActionModal = openModal(setSelectedAdminId);

  return {
    state: { TITLE, columns, admins },
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
