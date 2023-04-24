import { useForm } from "react-hook-form";
import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
} from "../../../../components/Form/FormsInputs";
import { useParticipantContext } from "../context/participantProvider";

export default function CreateAndEditParticipantTemplate({ action }) {
  const { createAndEditParticipantState } = useParticipantContext();
  const {
    state: { isLoading, defaultValues },
    handlers: { onSubmit },
  } = createAndEditParticipantState;

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
