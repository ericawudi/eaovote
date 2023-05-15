import { useQueryClient } from "react-query";
import useRQMutation, {
  updateQueryCacheWithNewActor,
  removeActorFromQueryCache,
  API_METHODS,
} from "../../../../hooks/useRQMutation";
import { useAppContext } from "../../../../contest/AppContextProvider";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";
import { QUERY_KEYS } from "./voters";
import ADMIN_URLS from "../../index/urls";

const DEFAULT_VALUES = {
  fullname: "",
  username: "",
  password: "",
  email: "",
  msisdn: "",
};

export const VOTER_ACTIONS = {
  create: "Create New Voter",
  edit: "Edit Voter",
};

export default function useCreateAndEditVoterLogic(data) {
  const queryClient = useQueryClient();
  const { addNotification } = useAppContext();
  const { showCreateContent, closeActionModal, voter } = data;
  const defaultValues = voter ?? DEFAULT_VALUES;

  // === creating a new voter ===
  const onCreateSuccess = (res) => {
    const [voter] = res.data.data;
    queryClient.setQueryData(QUERY_KEYS.VOTERS, (previousVoters) =>
      updateQueryCacheWithNewActor(previousVoters, voter)
    );

    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.CREATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Voter Created Successfully",
    });
  };

  const onCreateFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.CREATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
    return closeActionModal();
  };

  const { mutate: createVoter, isLoading: isCreateVoterLoading } =
    useRQMutation({
      onSuccess: onCreateSuccess,
      onError: onCreateFail,
    });

  const handleCreateVoter = (payload) => createVoter(payload);

  // === editing a voter ===

  const onEditSuccess = (res) => {
    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.UPDATE,
      severity: NOTIFICATION_SEVERITY.success,
      message: "Voter Edited Successfully",
    });
    queryClient.invalidateQueries(QUERY_KEYS.VOTERS);
    return closeActionModal();
  };

  const onEditFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.UPDATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const { mutate: editVoter, isLoading: isEditVoterLoading } = useRQMutation({
    method: API_METHODS.UPDATE,
    onSuccess: onEditSuccess,
    onError: onEditFail,
  });

  const handleEditVoter = (payload) => {
    const { data } = payload;

    const updateData = Object.keys(data).reduce((result, key) => {
      if (data[key] !== voter[key]) result[key] = data[key];
      return result;
    }, {});

    return editVoter({ ...payload, data: updateData });
  };

  // === sending create and edit API request
  const isLoading = isCreateVoterLoading || isEditVoterLoading;
  const onSubmit = (data) => {
    const payload = { url: ADMIN_URLS.voters, data };
    return showCreateContent
      ? handleCreateVoter(payload)
      : handleEditVoter(payload);
  };

  return {
    defaultValues,
    isLoading: isCreateVoterLoading || isEditVoterLoading,
    allowUsernameEdit: showCreateContent,
    onSubmit,
  };
}
