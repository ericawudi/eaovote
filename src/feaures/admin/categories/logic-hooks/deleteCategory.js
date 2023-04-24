export default function useDeleteCategoryLogic(close) {
  const handleDelete = () => {
    console.log("deleting...");
    return setTimeout(() => close(), 1000);
  };
  return { handleDelete, handleCancel: close };
}
