import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Categories";
const columns = ["Category", "Competition", "Actions"];
const categories = [
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
  ["jamesjoe", "Joe James"],
];

export default function useCategoryLogicHook() {
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
    state: { TITLE, columns, categories },
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
