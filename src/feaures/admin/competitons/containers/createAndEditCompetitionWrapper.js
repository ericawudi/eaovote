import { useForm } from "react-hook-form";
import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  SelectInput,
  TextAreaInput,
} from "../../../../components/Form/FormsInputs";
import { useCompetitionsContext } from "../context/competionProvider";

export default function CreateAndEditCompetitionTemplate({ action }) {
  const { createAndEditCompetitionState } = useCompetitionsContext();
  const {
    state: { isLoading, defaultValues },
    handlers: { onSubmit },
  } = createAndEditCompetitionState;

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
        <TextInput
          register={register}
          name="name"
          label="Competition Name*"
          error={errors.name}
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
