import { Grid } from "@mui/material";
import FormContainer from "../../../components/form/form-container";
import {
  TextInput,
  PasswordInput,
  NumberInput,
  SelectInput,
} from "../../../components/form/forms-inputs";
import useCreateAdminLogicHook from "../logic-hooks/create-admin";

export default function CreateCompetition() {
  const { state, handlers } = useCreateAdminLogicHook();
  const { register, errors, isLoading } = state;
  const { handleSubmit, onSubmit } = handlers;
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "10px" }}>Create New Admin</h3>
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
        <Grid container justifyContent="space-between" sx={{ width: "100%" }}>
          <Grid item sx={{ width: "49%" }}>
            <SelectInput
              register={register}
              name="idcard_type"
              label="ID Card Type*"
              error={errors.idcard_type}
              options={[
                { label: "Ghana Card", value: "Ghana Card" },
                { label: "Passport", value: "Passport" },
              ]}
            />
          </Grid>
          <Grid item sx={{ width: "49%" }}>
            <TextInput
              register={register}
              name="idCard"
              label="Card Number*"
              error={errors.idCard}
            />
          </Grid>
        </Grid>
        <TextInput
          register={register}
          name="company_name"
          label="Company Name*"
          error={errors.company_name}
        />
      </FormContainer>
    </div>
  );
}
