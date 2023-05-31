import { useQueryClient } from "@tanstack/react-query";
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

export default function useCreateAndEditVoterLogic(args) {
  const queryClient = useQueryClient();
  const { addNotification, showCreateContent, closeActionModal, voter } = args;
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

  const handleCreateVoter = (data) =>
    createVoter({ url: ADMIN_URLS.voters, data });

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

  const handleEditVoter = (data) => {
    const { id } = voter;
    const url = `${ADMIN_URLS.VOTERS}/${id}`;
    const updateData = Object.keys(data).reduce((result, key) => {
      if (data[key] !== voter[key]) result[key] = data[key];
      return result;
    }, {});

    return editVoter({ url, data: updateData });
  };

  // === sending create and edit API request

  const onSubmit = (data) =>
    showCreateContent ? handleCreateVoter(data) : handleEditVoter(data);

  return {
    defaultValues,
    isLoading: isCreateVoterLoading || isEditVoterLoading,
    allowUsernameEdit: showCreateContent,
    onSubmit,
  };
}
