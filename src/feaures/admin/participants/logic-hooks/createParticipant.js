import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  fullname: "",
  description: "",
  competition_id: 0,
  category_id: 0,
};
export default function useCreateParticipantLogicHook() {
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
