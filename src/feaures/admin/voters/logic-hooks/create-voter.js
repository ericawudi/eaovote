import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  fullname: "",
  username: "",
  password: "",
  email: "",
  msisdn: "",
};
export default function useCreateVoterLogicHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: DEFAULT_VALUES });

  const onSubmit = (values) => console.log({ values });

  return {
    state: { register, errors, isLoading: false },
    handlers: { handleSubmit, onSubmit },
  };
}
