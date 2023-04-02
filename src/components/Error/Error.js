import { SVGs } from "../../assets/images/svg";
import classes from "./Error.module.css";

function Error({ message }) {
  const randomInt = Math.floor(Math.random() * 14);
  return (
    <div className={classes.container}>
      <img src={SVGs[randomInt]} className={classes.image} alt="Error emoji" />
      <div className={classes.errorMsg}>{message}</div>
      <div className={classes.enjoy}>EnJoy!!</div>
    </div>
  );
}

export default Error;
