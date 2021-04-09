import IcecreamPreview from "./IcecreamPreview/IcecreamPreview";  
import Modal from "../UI/Modal/Modal";
import classes from "./IcecreamBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import IcecreamControls from "./IcecreamControls/IcecreamControl/IcecreamControl";

const IcecreamBuilder = () => {
  const prices = {
    banana: 5,
    chocolate: 6,
    lactic: 3,
    pistachio: 5,
    strawberry: 4,
  }; 
  const [ingredients, setIngredients] = useState({});

  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(
    () => axios
      .get('https://builder-5666c-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      }), []
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.IcecreamBuilder}>
      <IcecreamPreview
        ingredients={ingredients}
        price={price} />
      <IcecreamControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
}

export default IcecreamBuilder;