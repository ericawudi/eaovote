import { useForm } from "react-hook-form";

const DEFAULT_VALUES = {
  company_name: "",
  email: "",
  fullname: "",
  idCard: "",
  idcard_type: "Ghana Card",
  admin_type: "admin",
  msisdn: "",
  password: "",
  username: "",
};
export default function useCreateAdminLogicHook() {
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
