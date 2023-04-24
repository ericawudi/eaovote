const DEFAULT_VALUES = {
  name: "",
  adminId: "",
  description: "",
};
export default function useCreateAndEditCompetitionLogic(data) {
  const { closeActionModal, competition } = data;
  const onSubmit = (values) =>
    console.log({ values, fxn: JSON.stringify(closeActionModal) });

  return {
    state: {
      defaultValues: competition ?? DEFAULT_VALUES,
      isLoading: false,
    },
    handlers: { onSubmit },
  };
}
