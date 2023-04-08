import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";

const TITLE = "Voters";
const columns = ["Voter", "Fullname", "email", "Contact", "Actions"];
const DUMMY_VOTERS = [
  {
    id: "voter001",
    fullname: "Joe James",
    username: "jamesjoe",
    email: "admin@gmail.com",
    msisdn: "23354698776",
  },
  {
    id: "voter001",
    fullname: "Joe James",
    username: "jamesjoe",
    email: "admin@gmail.com",
    msisdn: "23354698776",
  },
  {
    id: "voter001",
    fullname: "Joe James",
    username: "jamesjoe",
    email: "admin@gmail.com",
    msisdn: "23354698776",
  },
  {
    id: "voter001",
    fullname: "Joe James",
    username: "jamesjoe",
    email: "admin@gmail.com",
    msisdn: "23354698776",
  },
  {
    id: "voter001",
    fullname: "Joe James",
    username: "jamesjoe",
    email: "admin@gmail.com",
    msisdn: "23354698776",
  },
];

export default function useVotersLogicHook() {
  const [selectedVoterId, setSelectedVoterId] = useState("");
  const selectedVoter = DUMMY_VOTERS.find(({ id }) => id === selectedVoterId);

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

  const showActionModal = openModal(setSelectedVoterId);

  return {
    state: { TITLE, columns, voters: DUMMY_VOTERS, selectedVoter },
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
