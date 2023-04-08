import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  PasswordInput,
  NumberInput,
} from "../../../../components/Form/FormsInputs";
import useCreateAndEditVoterHook from "../logic-hooks/createAndEditVoter";

export default function CreateAndEditVoterTemplate({ action, voter = null }) {
  const {
    template: { title, allowUsernameEdit },
    state: { register, errors, isLoading },
    handlers: { handleSubmit, onSubmit },
  } = useCreateAndEditVoterHook(action, voter);

  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>{title}</h3>
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
        <TextInput
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
