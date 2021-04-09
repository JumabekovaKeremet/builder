
import Button from "../../../UI/Button/Button";
import IcecreamIngredient from "../../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamControl.module.css";

const IcecreamControl = ({ type, add, remove }) => {
  return (
    <div className={classes.IcecreamControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <IcecreamIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default IcecreamControl;