import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Voters";
const columns = ["Voter", "Fullname", "email", "Contact", "Actions"];
const voters = [
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
];

export default function useVotersLogicHook() {
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
    state: { TITLE, columns, voters },
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
