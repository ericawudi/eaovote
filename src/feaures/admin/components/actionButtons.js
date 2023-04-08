import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";

const styles = {
  outer: { opacity: "0.9" },
  inner: { opacity: "0.9", margin: "0 7px" },
};
const DeleteIconButton = ({ onClick }) => (
  <Tooltip title="Delete">
    <DeleteForeverIcon style={styles.outer} onClick={onClick} />
  </Tooltip>
);
const ViewIconButton = ({ onClick }) => (
  <Tooltip title="View">
    <VisibilityIcon style={styles.inner} onClick={onClick} />
  </Tooltip>
);
const EditIconButton = ({ onClick }) => (
  <Tooltip title="Edit">
    <EditIcon style={styles.outer} onClick={onClick} />
  </Tooltip>
);

export default function ActionIcons(props) {
  const { onEdit, onDelete, onView } = props;
  return (
    <>
      <ViewIconButton onClick={onView} />
      <EditIconButton onClick={onEdit} />
      <DeleteIconButton onClick={onDelete} />
    </>
  );
}
export { DeleteIconButton, ViewIconButton, EditIconButton };
