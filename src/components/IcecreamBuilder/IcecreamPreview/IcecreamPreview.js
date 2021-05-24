import IcecreamIngredient from "../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamPreview.module.css";

// import ingredientsBackground from "../../../img/wafer.svg";

const IcecreamPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(
        <IcecreamIngredient key={ingredient + i} type={ingredient} />
      );
    }
  }

  return (
    <div className={classes.IcecreamPreview}>
      <div className={classes.icecream}>
        <div className={classes.ingredients}>{result}</div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
};

export default IcecreamPreview;
