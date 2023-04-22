import { Button } from "@mui/material";
import classes from "../styles/components.module.css";

export default function DeleteActorTemplate(props) {
  const { actor, name, cancel, confirm } = props;
  return (
    <div>
      <h1 className={classes.template_title}>Delete {actor}</h1>
      <p className={classes.delete__warning}>
        You are about to permanantly delete voter {name}
      </p>
      <p className={classes.delete__warning}>Are you sure?</p>
      <div className={classes.delete__button_container}>
        <Button className={classes.delete__button} onClick={cancel}>
          Cancel
        </Button>
        <Button
          className={`${classes.delete__button} ${classes.delete__confirm_btn}`}
          onClick={confirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
