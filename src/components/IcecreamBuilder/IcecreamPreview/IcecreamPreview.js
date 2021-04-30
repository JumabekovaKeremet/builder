
import IcecreamIngredient from "../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamPreview.module.css";
import icecream from "../../../img/icecream.svg"

const IcecreamPreview = ({ ingredients, price }) => {
  const types = {
    icecream: { backgroundImage: `url(${icecream  })`, width: "50px", height: "50px" },
  };

    const result =[];

    for (const ingredient in ingredients) {
        for (let i = 0; i < ingredients[ingredient]; i++){
        result.push(<IcecreamIngredient   type={ingredient} />);
    };
    };

        return (
          <div className={classes.IcecreamPreview}>
            <div className={classes.icecream}>
                {result}
            </div>
            <div className={classes.price}>{price.toFixed(1)} som</div>
          </div>
        );
}
 
export default IcecreamPreview;