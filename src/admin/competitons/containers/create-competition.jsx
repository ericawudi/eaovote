import { Grid } from "@mui/material";
import FormContainer from "../../../components/form/form-container";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
} from "../../../components/form/forms-inputs";
import useCreateCompetitionLogicHook from "../logic-hooks/create-competition";

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
