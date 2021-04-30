import classes from "./IcecreamIngredient.module.css";
import bananas from "../../../img/bananas.svg";
import chocolate from "../../../img/chocolate.svg";
import strawbarry from "../../../img/strawbarry.svg";
import pistachio from "../../../img/pistachio.svg";
import lactic from "../../../img/lactic.svg";


const IcecreamIngredient = ({ type }) => {
  const types = {
    bananas: { backgroundImage: `url(${bananas})`, width: "60px", height: "60px" },
    chocolate: { backgroundImage: `url(${chocolate})`, width: "60px", height: "60px" },
    strawberry: { backgroundImage: `url(${strawbarry})`, width: "60px", height: "60px" },
    pistachio: { backgroundImage: `url(${pistachio  })`, width: "60px", height: "60px" },
    lactic: { backgroundImage: `url(${lactic  })`, width: "60px", height: "60px" },
  };

  return <div className={classes.IcecreamIngredient} style={types[type]}></div>;
};

export default IcecreamIngredient;