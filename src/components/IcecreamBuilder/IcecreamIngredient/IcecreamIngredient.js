import classes from "./IcecreamIngredient.module.css";


const IcecreamIngredient = ({ type }) => {
  const types = {
    bananas: {
      backgroundImage: `url("${buns}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      marginRight: "5px",
      display: "inline-block",
    },
    chocolate: {
      backgroundImage: `url("${bread}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      marginRight: "5px",
      display: "inline-block",
    },
    lactic: {
      backgroundImage: `url("${blackBun}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      marginRight: "5px",
      display: "inline-block",
    },
    pistachio: {
      backgroundImage: `url("${croissant}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      marginRight: "5px",
      display: "inline-block",
    },
    strawberry: {
      backgroundImage: `url("${ecler}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      marginRight: "5px",
      display: "inline-block",
    },
  };

  return <div className={classes.IcecreamIngredient} style={types[type]}></div>;
};

export default IcecreamIngredient;