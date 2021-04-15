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
import Button from "../../UI/Button/Button";
import IcecreamControl from "./IcecreamControl/IcecreamControl";
import classes from "./IcecreamControl.module.css";
import SwitchBun from "./SwitchBun/SwitchBun";

const IcecreamControls = ({
  switchFilling,
  startOrdering,
  filling,
  addIngredient,
  ingredients,
  removeIngredient,
}) => {
  const result = [];
  const names = ["banana", "chocolate", "lactic", "pistachio", "strawberry"];

  for (const name in names) {
    result.push(
      <IcecreamControl
        type={names[name] + filling}
        key={names[name]}
        switchFilling={switchFilling}
        count={ingredients.length}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );
  }
  return (
    <div className={classes.IcecreamControls}>
      <SwitchBun switchFilling={switchFilling} />
      {result}
      <div className={classes.DivButton}>
        <Button disabled={!ingredients.length} onClick={startOrdering} glav="true">
          Order
        </Button>
      </div>
    </div>
  );
};

export default IcecreamControls;