import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
} from "../../../../components/Form/FormsInputs";
import useCreateCategoryLogicHook from "../logic-hooks/create-category";

export default function CreateCategory() {
  const { state, handlers } = useCreateCategoryLogicHook();
  const { register, errors, isLoading } = state;
  const { handleSubmit, onSubmit } = handlers;
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>
        Create New Category
      </h3>
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
          error={errors.adminId}
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
