import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  PasswordInput,
  NumberInput,
} from "../../../../components/Form/formsInputs";
import useCreateVoterLogicHook from "../logic-hooks/create-voter";

export default function CreateVoter() {
  const { state, handlers } = useCreateVoterLogicHook();
  const { register, errors, isLoading } = state;
  const { handleSubmit, onSubmit } = handlers;
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>Create New Voter</h3>
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
