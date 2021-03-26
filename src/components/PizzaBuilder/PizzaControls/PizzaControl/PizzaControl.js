import PizzaIngredient from "../../PizzaIngredient/PizzaIngredient"
import classes from "./PizzaControl.module.css";


const PizzaControl = ({ type }) => {
    return ( 
        <div className = {classes.PizzaControl}>
            <button className = {classes.ControlA}>-</button>
            {type}
            <button className = {classes.ControlB}>+</button>
        </div>
    );
}

export default PizzaControl;



