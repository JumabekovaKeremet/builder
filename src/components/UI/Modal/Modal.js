import classes from "./Modal.module.css";
import Backdrop from "../Backdrop";

const Modal = ({ show, children, cancel }) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-400vh)",
  };

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancel} />
      <div className={classes.content} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
