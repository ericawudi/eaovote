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
  const { showCreateContent, closeActionModal, voter } = data;
  const defaultValues = voter ?? DEFAULT_VALUES;

  const onSubmit = (values) => {
    console.log({ action: null, values });
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
