import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import useModalViews from "../../hooks/use-modal-views";
import { setAllAdmins } from "../../../libs/redux/actions/admins";
import { getAllAdminsAPIRequest } from "../../../services/admins";

const TITLE = "Admins";
const columns = ["Admin", "Full Name", "Email", "Phone", "Actions"];
const admins = [
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
  ["jamesjoe", "Joe James", "admin@gmail.com", "23354698776"],
];

export default function useAdminLogic() {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authSlice);
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

  useEffect(() => {
    const fetchAllAdmins = async () => {
      const response = await getAllAdminsAPIRequest(authToken);
      if (response.err) return console.log({ FETCH_FAILED: response.message });
      console.log({ SUCCESS: response });
      // return dispatch(setCompetitons(res.data.data));
    };
    fetchAllAdmins();
  }, [authToken]);
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
