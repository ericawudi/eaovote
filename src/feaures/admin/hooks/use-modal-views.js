import { useState } from "react";

const ACTIONS = {
  createActor: "create-actor",
  editActor: "edit-actor",
  viewActor: "view-actor",
  deleteActor: "delete-actor",
};
const useModalViews = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

  const showEditContent = selectedAction === ACTIONS.editActor;
  const showCreateContent = selectedAction === ACTIONS.createActor;
  const showDeleteContent = selectedAction === ACTIONS.deleteActor;
  const showViewContent = selectedAction === ACTIONS.viewActor;

  const openModal = (setActorId) => (action, id) => {
    setActorId(id);
    setSelectedAction(action);
    setShowModal(true);
  };

  const closeActionModal = () => {
    setShowModal(false);
    setSelectedAction("");
  };
  return {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    showDeleteContent,
    showViewContent,
    openModal,
    closeActionModal,
  };
};

export default useModalViews;
