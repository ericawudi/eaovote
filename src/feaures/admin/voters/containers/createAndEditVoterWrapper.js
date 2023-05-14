import { useForm } from "react-hook-form";
import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  PasswordInput,
  NumberInput,
  EmailInput,
} from "../../../../components/Form/FormsInputs";
import { useVotersContext } from "../context/voterProvider";

export default function CreateAndEditVoterTemplate({ action }) {
  const { createAndEditVoterState } = useVotersContext();
  const {
    state: { allowUsernameEdit, isLoading, defaultValues },
    handlers: { onSubmit },
  } = createAndEditVoterState;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>{action}</h3>
      <FormContainer
        loading={isLoading}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <TextInput
          register={register}
          name="fullname"
          label="Full Name*"
          error={errors.fullname}
        />
        <TextInput
          register={register}
          name="username"
          label="Username*"
          error={errors.username}
          disabled={!allowUsernameEdit}
        />
        <PasswordInput register={register} error={errors.password} />
        <EmailInput
          register={register}
          name="email"
          label="Email*"
          error={errors.email}
        />
        <NumberInput
          register={register}
          name="msisdn"
          label="Phone Number*"
          error={errors.msisdn}
        />
      </FormContainer>
    </div>
  );
}
