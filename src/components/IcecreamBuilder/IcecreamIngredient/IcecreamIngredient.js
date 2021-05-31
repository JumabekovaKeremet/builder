import React from "react";
import bananas from "../../../img/bananas.svg";
import chocolate from "../../../img/chocolate.svg";
import strawberry from "../../../img/strawberry.svg";
import pistachio from "../../../img/pistachio.svg";
import blackberry from "../../../img/blackberry.svg";
import classes from "./IcecreamIngredient.module.css";

const IcecreamIngredient = ({ type }) => {
  const types = {
    bananas: {
      backgroundImage: `url(${bananas})`,
      width: "80px",
      height: "80px",
    },
    chocolate: {
      backgroundImage: `url(${chocolate})`,
      width: "80px",
      height: "80px",
    },
    strawberry: {
      backgroundImage: `url(${strawberry})`,
      width: "80px",
      height: "80px",
    },
    pistachio: {
      backgroundImage: `url(${pistachio})`,
      width: "80px",
      height: "80px",
    },
    blackberry: {
      backgroundImage: `url(${blackberry})`,
      width: "80px",
      height: "80px",
    },
  };

  return <div className={classes.IcecreamIngredient} style={types[type]}></div>;
};

export default IcecreamIngredient;
