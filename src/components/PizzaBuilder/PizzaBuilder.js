import classes from "./PizzaBuilder.module.css";
import PizzaControls from "./PizzaControls/PizzaControls";
import PizzaPreview from "./PizzaPreview/PizzaPreview";

const PizzaBuilder=() =>{
 const ingredients={
     tomato: 1,
     salami: 2,
     greenOlive: 5,

 }

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls />
    </div>
  );
  }

export default PizzaBuilder;