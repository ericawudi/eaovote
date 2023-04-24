export default function useDeleteCompetitionLogic(close) {
  const handleDelete = () => {
    console.log("deleting...");
    return setTimeout(() => close(), 1000);
  };
  return { handleDelete, handleCancel: close };
}
