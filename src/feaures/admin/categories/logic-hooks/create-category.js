import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  competition_id: null,
  name: "",
  description: "",
};
export default function useCreateCategoryLogicHook() {
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
