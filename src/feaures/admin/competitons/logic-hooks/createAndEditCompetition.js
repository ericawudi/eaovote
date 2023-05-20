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
  name: "",
  adminId: "",
  description: "",
};
export default function useCreateAndEditCompetitionLogic(args) {
  const queryClient = useQueryClient();
  const { addNotification, closeActionModal, competition } = args;

  // === creating a new participant ===
  const onCreateSuccess = (res) => {
    const [competition] = res.data.data;
    queryClient.setQueryData(QUERY_KEYS.COMPETITIONS, (previousCategories) =>
      updateQueryCacheWithNewActor(previousCategories, competition)
    );

    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITION.CREATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Competition Created Successfully",
    });
  };

  const onCreateFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITION.CREATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
    return closeActionModal();
  };

  const { mutate: createCompetition, isLoading: isCreateCompetitionLoading } =
    useRQMutation({
      onSuccess: onCreateSuccess,
      onError: onCreateFail,
    });

  const handleCreateCompetition = (data) =>
    createCompetition({ url: ADMIN_URLS.COMPETITIONS, data });

  // === editing a participant ===

  const onEditSuccess = () => {
    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITION.UPDATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Competition Edited Successfully",
    });
    queryClient.invalidateQueries(QUERY_KEYS.COMPETITIONS);
    return closeActionModal();
  };

  const onEditFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.COMPETITION.UPDATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const { mutate: editCompetition, isLoading: isEditCompetitionLoading } =
    useRQMutation({
      method: API_METHODS.UPDATE,
      onSuccess: onEditSuccess,
      onError: onEditFail,
    });

  const handleEditCompetition = (data) => {
    const { id } = competition;
    const url = `${ADMIN_URLS.COMPETITIONS}/${id}`;
    const updateData = Object.keys(data).reduce((result, key) => {
      if (data[key] !== competition[key]) result[key] = data[key];
      return result;
    }, {});

    return editCompetition({ url, data: updateData });
  };

  // === sending create and edit API request

  const onSubmit = (data) =>
    !!competition ? handleEditCompetition(data) : handleCreateCompetition(data);

  return {
    defaultValues: competition ?? DEFAULT_VALUES,
    isLoading: isCreateCompetitionLoading || isEditCompetitionLoading,
    onSubmit,
  };
}
