import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import IcecreamIngredient from "../../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamControl.module.css";

const IcecreamControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.IcecreamControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <IcecreamIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>
        -
      </Button>
    </div>
  );
};
export default IcecreamControl;
