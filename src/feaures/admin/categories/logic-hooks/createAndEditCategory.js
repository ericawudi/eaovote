import { useQueryClient } from "react-query";
import useRQMutation, {
  updateQueryCacheWithNewActor,
  API_METHODS,
} from "../../../../hooks/useRQMutation";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS, ADMIN_URLS } from "../../index/constants";

const DEFAULT_VALUES = {
  competition_id: null,
  name: "",
  description: "",
};
export default function useCreateAndEditCategoryLogic(args) {
  const queryClient = useQueryClient();
  const { addNotification, closeActionModal, category } = args;

  // === creating a new participant ===
  const onCreateSuccess = (res) => {
    const [category] = res.data.data;
    queryClient.setQueryData(QUERY_KEYS.CATEGORIES, (previousCategories) =>
      updateQueryCacheWithNewActor(previousCategories, category)
    );

    addNotification({
      action: NOTIFICATION_ACTIONS.CATEGORY.CREATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Category Created Successfully",
    });
  };

  const onCreateFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.CATEGORY.CREATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
    return closeActionModal();
  };

  const { mutate: createCategory, isLoading: isCreateCategoryLoading } =
    useRQMutation({
      onSuccess: onCreateSuccess,
      onError: onCreateFail,
    });

  const handleCreateCategory = (data) =>
    createCategory({ url: ADMIN_URLS.CATEGORIES, data });

  // === editing a participant ===

  const onEditSuccess = () => {
    addNotification({
      action: NOTIFICATION_ACTIONS.CATEGORY.UPDATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Category Edited Successfully",
    });
    queryClient.invalidateQueries(QUERY_KEYS.CATEGORIES);
    return closeActionModal();
  };

  const onEditFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.CATEGORY.UPDATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const { mutate: editCategory, isLoading: isEditCategoryLoading } =
    useRQMutation({
      method: API_METHODS.UPDATE,
      onSuccess: onEditSuccess,
      onError: onEditFail,
    });

  const handleEditCategory = (data) => {
    const { id } = category;
    const url = `${ADMIN_URLS.CATEGORIES}/${id}`;
    const updateData = Object.keys(data).reduce((result, key) => {
      if (data[key] !== category[key]) result[key] = data[key];
      return result;
    }, {});

    return editCategory({ url, data: updateData });
  };

  // === sending create and edit API request

  const onSubmit = (data) =>
    !!category ? handleEditCategory(data) : handleCreateCategory(data);

  return {
    defaultValues: category ?? DEFAULT_VALUES,
    isLoading: isCreateCategoryLoading || isEditCategoryLoading,
    onSubmit,
  };
}
