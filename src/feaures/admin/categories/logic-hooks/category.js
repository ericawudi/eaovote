import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Category";
const columns = ["Category", "Competition", "Actions"];
const DUMMY_CATEGORIES = [
  {
    id: "ctg001",
    competitionId: "admin001",
    competition: "Eric Awudi",
    name: "Joe James",
    description: "This is a test",
  },
  {
    id: "ctg002",
    competitionId: "admin001",
    competition: "Eric Awudi",
    name: "Joe James",
    description: "This is a test",
  },
  {
    id: "ctg002",
    competitionId: "admin001",
    competition: "Eric Awudi",
    name: "Joe James",
    description: "This is a test",
  },
];

export default function useCategoriesLogic() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
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

  const showActionModal = openModal(setSelectedCategoryId);
  const selectedCategory = DUMMY_CATEGORIES.find(
    ({ id }) => id === selectedCategoryId
  );

  return {
    state: {
      TITLE,
      columns,
      categories: DUMMY_CATEGORIES,
      selectedCategory,
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
