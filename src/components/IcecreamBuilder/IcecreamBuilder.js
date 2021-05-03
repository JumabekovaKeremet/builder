import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal  from "../UI/Modal/Modal";
import classes from "./IcecreamBuilder.module.css";
import IcecreamControls from "./IcecreamControls/IcecreamControls";
import IcecreamPreview from "./IcecreamPreview/IcecreamPreview";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const IcecreamBuilder = (history) => {

  const [ingredients, setIngredients] = useState([]);
  const [ordering, setOrdering] = useState(false);

  const [price, setPrice] = useState(0);
  const prices = {
    bananas: 5,
    chocolate: 6,
    pistachio: 5,
    strawberry: 4,
    lactic: 2,
  };
  
    useEffect(loadDefaults, []);
  
    function loadDefaults() {
      axios
        .get('https://builder-5666c-default-rtdb.firebaseio.com/default.json')
        .then(response => {
          setPrice(response.data.price);
  
          // For arrays
          // setIngredients(Object.values(response.data.ingredients));
          // For objects
          setIngredients(response.data.ingredients);
        });
    }
  
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
  
    function finishOrdering() {
      axios
        .post('https://builder-5666c-default-rtdb.firebaseio.com/orders.json', {
          ingredients: ingredients,
          price: price,
          address: "1234 Jusaeva str",
          phone: "0 777 777 777",
          name: "Sadyr Japarov",
        })
        .then(() => {
          setOrdering(false);
          loadDefaults();
          history.push('/checkout');
        });
    }

  return (
    <div className={classes.IcecreamBuilder}>
      <IcecreamPreview price={price} ingredients={ingredients}/>
      <IcecreamControls
        ingredients={ingredients}
        addIngredient={addIngredient} 
        removeIngredient={removeIngredient}
        startOrdering = {startOrdering}
      />
      <Modal
      show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering}  green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default React.memo(IcecreamBuilder);