import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const outputIngredients = Object.keys(ingredients).map((ingredient) => (
    <em key={ingredient} className={classes.ingredient}>
      {ingredient} - {ingredients[ingredient]}
    </em>
  ));

  return (
    <div className={classes.Order}>
      <div>
      <strong>Name:</strong>{name}
      </div>
      <div>
        <strong>Phone:</strong>{phone}
      </div>
      <div>
        <strong>Address:</strong>{address}
      </div>
      <div>
        <strong>Ingredient:</strong>{outputIngredients}
        </div>
      <div>
        <strong>Price:</strong>Price:{price}
        </div>
    </div>
  );
};

export default Order;
