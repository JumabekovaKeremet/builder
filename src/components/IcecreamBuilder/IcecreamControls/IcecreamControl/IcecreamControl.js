import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import IcecreamIngredient from "../../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamControl.module.css";

const IcecreamControl = ({ type, count }) => {
  const dispatch = useDispatch();
    return ( 
        <div className={classes.IcecreamControl}>
        <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.ingredient}>
        <IcecreamIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
    </div>
    );
}
 
export default IcecreamControl;

