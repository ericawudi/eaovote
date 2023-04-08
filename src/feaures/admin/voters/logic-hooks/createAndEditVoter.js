import { useForm } from "react-hook-form";

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
export default function useCreateAndEditVoterHook(action, voter) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: voter ?? DEFAULT_VALUES });

  const allowUsernameEdit = action === VOTER_ACTIONS.create;

  const onSubmit = (values) => console.log({ action, values });

  return {
    template: { title: action, allowUsernameEdit },
    state: { register, errors, isLoading: false },
    handlers: { handleSubmit, onSubmit },
  };
}
