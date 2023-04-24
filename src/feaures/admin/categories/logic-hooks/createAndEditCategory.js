const DEFAULT_VALUES = {
  competition_id: null,
  name: "",
  description: "",
};
export default function useCreateAndEditCategoryLogic(data) {
  const { closeActionModal, category } = data;
  const onSubmit = (values) =>
    console.log({ values, fxn: JSON.stringify(closeActionModal) });

  return {
    state: {
      defaultValues: category ?? DEFAULT_VALUES,
      isLoading: false,
    },
    handlers: { onSubmit },
  };
}
