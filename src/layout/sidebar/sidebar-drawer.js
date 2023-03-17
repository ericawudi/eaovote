import Drawer from "@mui/material/Drawer";

export default function SidebarDrawer(props) {
  const { open, onClose, children } = props;

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: "300px" }}>{children}</div>
    </Drawer>
  );
}
