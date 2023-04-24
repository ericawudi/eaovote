export default function useDeleteParticipantLogic(close) {
  const handleDelete = () => {
    console.log("deleting...");
    return setTimeout(() => close(), 1000);
  };
  return { handleDelete, handleCancel: close };
}
