import { useQueryClient } from "react-query";
import ADMIN_URLS from "../../index/urls";
import { useRQMutation } from "../../../../hooks/useRQMutation";
import { useAppContext } from "../../../../contest/AppContextProvider";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../../../../components/Notification/notificationConstants";

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

  const onCreateSuccess = (data) => {
    const [voter] = data.data;
    // queryClient.setQueryData("voter", (previousVoters) => ({
    //   ...previousVoters,
    //   data: [...previousVoters.data, voter],
    // }));

    console.log({ SUCCESS: voter });
  };

  const onCreateFail = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.VOTER.CREATE,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const { mutate, isLoading } = useRQMutation({
    onSuccess: onCreateSuccess,
    onError: onCreateFail,
  });

  const onSubmit = (data) => {
    // console.log({ action: null, values });
    mutate({ url: ADMIN_URLS.voter, data });
    return closeActionModal();
  };

  return {
    state: {
      defaultValues,
      isLoading: false,
      allowUsernameEdit: showCreateContent,
    },
    handlers: { onSubmit },
  };
}
