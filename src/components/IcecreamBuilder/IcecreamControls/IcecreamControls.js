
import Button from "../../UI/Button/Button";
import IcecreamControl from "./IcecreamControl/IcecreamControl";
import classes from "./IcecreamControls.module.css";

const IcecreamControls = ({
  startOrdering,
  ingredients,
}) => {
  const results = [];
  let total = 0;

  for (const ingredient in ingredients) {
    total += ingredients[ingredient];
    results.push(<IcecreamControl
      key={ingredient}
      count={ingredients[ingredient]}
      type={ingredient} />)
  }
  return (
    <div className={classes.IcecreamControls}>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
};
export default IcecreamControls;