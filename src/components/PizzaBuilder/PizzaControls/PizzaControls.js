import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";


const PizzaControls = ({ ingredients }) => {
    const result = [];
    for (const ingredient in ingredients) {
        result.push(<PizzaControls />);
    }
    return ( 
        <div className = {classes.PizzaControls}>{result}</div>
    );
}
 
export default PizzaControls;