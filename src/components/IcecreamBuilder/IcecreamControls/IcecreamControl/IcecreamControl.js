
import Button from "../../../UI/Button/Button";
import IcecreamIngredient from "../../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamControl.module.css";

const IcecreamControl = ({ switchFilling, count, type, addIngredient, removeIngredient }) => {

    return ( 
        <div className = {classes.BunsControl}>
            <Button className = {classes.ControlButton} onClick = {() => removeIngredient(type)} disabled={!count}>-</Button>
            <IcecreamIngredient type = {type} />
            <Button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</Button>
        </div>
    );
}
 
export default IcecreamControl;