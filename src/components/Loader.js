import { CircularProgress } from "@mui/material";

function Loader({ size = 24, fetching = "data" }) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        marginTop: "70%",
        marginBottom: "20%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgress color="inherit" size={size} />
      <div id="loading">fetching {fetching}...</div>
    </div>
  );
}

export default Loader;
