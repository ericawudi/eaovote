import { Grid } from "@mui/material";
import FormContainer from "../../../../components/Form/FormContainer";
import {
  TextInput,
  PasswordInput,
  NumberInput,
  SelectInput,
} from "../../../../components/Form/FormsInputs";
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
          name="company_name"
          label="Company Name*"
          error={errors.company_name}
        />
        <TextInput
          register={register}
          name="fullname"
          label="Full Name*"
          error={errors.fullname}
        />
        <TextInput
          register={register}
          name="email"
          label="Email*"
          error={errors.email}
        />
        <Grid container justifyContent="space-between" sx={{ width: "100%" }}>
          <Grid item sx={{ width: "49%" }}>
            <TextInput
              register={register}
              name="username"
              label="Username*"
              error={errors.username}
            />
          </Grid>
          <Grid item sx={{ width: "49%" }}>
            <SelectInput
              register={register}
              name="account_type"
              label="Account Type*"
              error={errors.account_type}
              options={[
                { label: "Admin", value: "admin" },
                { label: "Super Admin", value: "superadmin" },
              ]}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ width: "100%" }}>
          <Grid item sx={{ width: "49%" }}>
            <PasswordInput register={register} error={errors.password} />
          </Grid>
          <Grid item sx={{ width: "49%" }}>
            <NumberInput
              register={register}
              name="msisdn"
              label="Phone Number*"
              error={errors.msisdn}
            />
          </Grid>
        </Grid>
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
      </FormContainer>
    </div>
  );
}
