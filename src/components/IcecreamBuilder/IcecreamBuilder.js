import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./IcecreamBuilder.module.css";
import IcecreamControls from "./IcecreamControls/IcecreamControls";
import IcecreamPreview from "./IcecreamPreview/IcecreamPreview";

const IcecreamBuilder = () => {

  const [ingredients, setIngredients] = useState([]);

  const [price, setPrice] = useState(0);
  const prices = {
    banana: 5,
    chocolate: 6,
    lactic: 3,
    pistachio: 5,
    strawberry: 4,
  };

  const [filling, setFilling] = useState("")
  function switchFilling(fillingBun) {
    setFilling(fillingBun)
  }

  
  const [ordering, setOrdering] = useState(false);
  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }
  
  useEffect(() => {
    axios.get(`https://builder-5666c-default-rtdb.firebaseio.com/default.json`)
        .then((responce) => {
          setPrice(responce.data.price);
          setIngredients(Object.values(responce.data.ingredients))
        })
  }, [])

  function addIngredient(type) {
    const newIngredients = [ ...ingredients ];
    newIngredients.push(type);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const index = ingredients.lastIndexOf(type);
    if (index !== -1) {
      const newIngredients = [ ...ingredients ];
      newIngredients.splice(index, 1);
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.IcecreamBuilder}>
      <IcecreamPreview price={price} ingredients={ingredients} startOrdering={startOrdering}/>
      <IcecreamControls
        filling={filling}
        ingredients={ingredients}
        switchFilling={switchFilling}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering = {startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
};

export default React.memo(IcecreamBuilder);