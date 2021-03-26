import classes from "./PizzaBuilder.module.css";
import PizzaControls from "./PizzaControls/PizzaControls";
import PizzaPreview from "./PizzaPreview/PizzaPreview";
import {useState} from "react";

const PizzaBuilder = () => {
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    greenOlive: 1,
    blackOlive: 1,
    redPepper: 1,
    yellowPepper: 1,
  });

 

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls
        ingredients={ingredients}
        />
    </div>
  );
}
export default PizzaBuilder;