import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
} from "../../../../components/Form/formsInputs";
import useCreateCompetitionLogicHook from "../logic-hooks/createCompetition";

export default function CreateAdmin() {
  const { state, handlers } = useCreateCompetitionLogicHook();
  const { register, errors, isLoading } = state;
  const { handleSubmit, onSubmit } = handlers;
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>
        Create New Competition
      </h3>
      <FormContainer
        loading={isLoading}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <TextInput
          register={register}
          name="name"
          label="Competition Name*"
          error={errors.name}
        />
        <SelectInput
          register={register}
          name="adminId"
          label="Admin*"
          error={errors.adminId}
          options={[
            { label: "Eric Awudi", value: "Eric Awudi" },
            { label: "Passport", value: "Passport" },
          ]}
        />
        <TextAreaInput
          register={register}
          name="description"
          label="Description*"
          error={errors.description}
        />
      </FormContainer>
    </div>
  );
}
