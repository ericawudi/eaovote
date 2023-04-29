export default function useDeleteVoterLogic(close) {
  const handleDelete = () => {
    return setTimeout(() => close(), 1000);
  };
  return { handleDelete, handleCancel: close };
}
