import { useState } from "react";
import useModalViews from "../../hooks/use-modal-views";
import { useFetch, getActorList } from "../../../../hooks/useFetch";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS, FETCH_ON_MOUNT } from "../../index/constants";

const TITLE = "Category";
const columns = ["Category", "Competition", "Actions"];

export default function useCategoriesLogic(addNotification) {
  const modalState = useModalViews();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const showActionModal = modalState.openModal(setSelectedCategoryId);

  const { error, ...rest } = useFetch(QUERY_KEYS.CATEGORIES, FETCH_ON_MOUNT);
  const categories = getActorList(rest.data);
  const selectedCategory = categories.find(
    ({ id }) => id === selectedCategoryId
  );

  if (error) {
    const err = error.response?.data?.data ?? error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.CATEGORY.FETCH_ALL,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  }

  return {
    state: {
      TITLE,
      columns,
      categories,
      selectedCategory,
    },
    modal: modalState,
    handlers: {
      showActionModal,
      closeActionModal: modalState.closeActionModal,
    },
  };
}
