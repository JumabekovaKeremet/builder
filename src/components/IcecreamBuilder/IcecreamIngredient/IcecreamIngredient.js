import React, { memo } from "react";
import classes from "./IcecreamIngredient.module.css";

export default memo(({ type }) => {
  const toysClasses = [classes.IcecreamIngredient, classes[type]];

  const pd = 40;
  const th = 380;
  const tw = 260;

  let stylePos = null;
  const getPosition = (ir) => {
    const ix = Math.floor(Math.random() * tw, 5);
    const iy = Math.floor(Math.random() * th, 12);

    const distance =
      Math.sqrt(Math.pow(ix - th, 2) + Math.pow(iy - th, 2)) + ir;

    return distance < th ? { x: ix - ir, y: iy - ir } : getPosition(pd);
  };

  switch (type) {
    case "bananas":
      toysClasses.push(classes.bananas);
      break;
    case "chocolate":
      toysClasses.push(classes.chocolate);
      break;
    case "lactic":
      toysClasses.push(classes.lactic);
      break;
    case "pistachio":
      toysClasses.push(classes.pistachio);
      break;
    case "strawberry":
      toysClasses.push(classes.strawberry);
      break;
    
  }

  const position = getPosition(110 / 6);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
  };
  return <div style={stylePos} className={IcecreamIngredientsClasses.join(" ")}></div>;
});
export default IcecreamIngredient;