import { useForm } from "react-hook-form";
import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
} from "../../../../components/Form/FormsInputs";
import { useCategoriesContext } from "../context/categoryProvider";

export default function CreateAndEditCategoryTemplate({ action }) {
  const { createAndEditCategoryState } = useCategoriesContext();
  const {
    state: { isLoading, defaultValues },
    handlers: { onSubmit },
  } = createAndEditCategoryState;

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
          name="name"
          label="Category Name*"
          error={errors.name}
        />
        <SelectInput
          register={register}
          name="competition_id"
          label="Competition*"
          error={errors.competitionId}
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
