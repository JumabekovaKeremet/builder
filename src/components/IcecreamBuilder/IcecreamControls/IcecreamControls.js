import IcecreamControl from "./IcecreamControl/IcecreamControl";
import Button from "../../UI/Button/Button";
import classes from "./IcecreamControls.module.css";


const IcecreamControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<IcecreamControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.IcecreamControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}
 
export default IcecreamControls;