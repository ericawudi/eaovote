import { useQueryClient } from "@tanstack/react-query";
import { useFetch, getActorList } from "../../../../hooks/useFetch";
import useRQMutation, {
  updateQueryCacheWithNewActor,
  API_METHODS,
} from "../../../../hooks/useRQMutation";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS, FETCH_ON_MOUNT, ADMIN_URLS } from "../../index/constants";

const DEFAULT_VALUES = {
  competition_id: null,
  name: "",
  description: "",
};
export default function useCreateAndEditCategoryLogic(args) {
  const queryClient = useQueryClient();
  const { addNotification, closeActionModal, category } = args;

  //  fetch all competitions
  const { error, ...rest } = useFetch(QUERY_KEYS.COMPETITIONS, FETCH_ON_MOUNT);

  const competitions = getActorList(rest.data);
  const competitionOptions = competitions.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  if (error) {
    const err = error.response?.data?.data ?? error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITIONS.FETCH_ALL,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  }

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

    return closeActionModal();
  };

  const onCreateFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.CATEGORY.CREATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
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
    competitionOptions,
    isLoading:
      isCreateCategoryLoading || isEditCategoryLoading || rest.isLoading,
    onSubmit,
  };
}
