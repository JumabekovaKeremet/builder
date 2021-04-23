import classes from "./IcecreamIngredient.module.css";
import bananas from "../../../img/bananas.svg";
import strawberry from "../../../img/strawbarry.svg";
import chocolate from "../../../img/chocolate.svg";
import pistachio from "../../../img/pistachio.svg"


const IcecreamIngredient = ({ type }) => {
  const types = {
    bananas: { backgroundImage: `url(${bananas})`, width: "35px", height: "35px" },
    chocolate: { backgroundImage: `url(${chocolate})`, width: "35px", height: "35px" },
    strawberry: { backgroundImage: `url(${strawberry})`, width: "10px", height: "10px" },
    pistachio: { backgroundImage: `url(${pistachio  })`, width: "10px", height: "10px" },
  };

  return <div className={classes.IcecreamIngredient} style={types[type]}></div>;
};

export default IcecreamIngredient;