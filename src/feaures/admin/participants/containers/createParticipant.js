import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
} from "../../../../components/Form/formsInputs";
import useCreateParticipantLogicHook from "../logic-hooks/createParticipant";

export default function CreateParticipant() {
  const { state, handlers } = useCreateParticipantLogicHook();
  const { register, errors, isLoading } = state;
  const { handleSubmit, onSubmit } = handlers;
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>
        Create New Participant
      </h3>
      <FormContainer
        loading={isLoading}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <TextInput
          register={register}
          name="Fullname"
          label="Full Name*"
          error={errors.fullname}
        />
        <SelectInput
          register={register}
          name="competition_id"
          label="Competition*"
          error={errors.competition_id}
          options={[
            { label: "Competition A", value: "Competition A" },
            { label: "Competition B", value: "Competition B" },
          ]}
        />
        <SelectInput
          register={register}
          name="category_id"
          label="Category*"
          error={errors.category_id}
          options={[
            { label: "Category A", value: "Category A" },
            { label: "Category B", value: "Category B" },
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
