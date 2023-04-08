import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  name: "",
  adminId: "",
  description: "",
};
export default function useCreateCompetitionLogicHook() {
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
