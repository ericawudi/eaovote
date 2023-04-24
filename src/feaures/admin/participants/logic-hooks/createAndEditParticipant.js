const DEFAULT_VALUES = {
  fullname: "",
  description: "",
  competition_id: 0,
  category_id: 0,
};
export default function useCreateAndEditParticipantLogic(data) {
  const { closeActionModal, participant } = data;
  const onSubmit = (values) =>
    console.log({ values, fxn: JSON.stringify(closeActionModal) });

  return {
    state: {
      defaultValues: participant ?? DEFAULT_VALUES,
      isLoading: false,
    },
    handlers: { onSubmit },
  };
}
