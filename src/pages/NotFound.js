import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { getLevelCookie } from "../utils/auth";

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    const level = getLevelCookie();
    navigate(`${level}`);
  }
  return (
    <div id="error-page">
      <Button id="btn" onClick={handleClick}>
        &#128542; Take me Back &#128542;
      </Button>
    </div>
  );
}

export default NotFound;
