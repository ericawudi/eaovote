const DEFAULT_VALUES = {
  name: "",
  adminId: "",
  description: "",
};
export default function useCreateAndEditCompetitionLogic(data) {
  console.log(data);
  const onSubmit = (values) => console.log({ values });

  return {
    state: {
      allowUsernameEdit: false,
      defaultValues: DEFAULT_VALUES,
      isLoading: false,
    },
    handlers: { onSubmit },
  };
}
