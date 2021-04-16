
import Button from "../../UI/Button/Button";
import IcecreamControl from "./IcecreamControl/IcecreamControl";
import classes from "./IcecreamControls.module.css";
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