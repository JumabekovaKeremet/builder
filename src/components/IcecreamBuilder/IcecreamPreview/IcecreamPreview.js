
import IcecreamIngredient from "../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamPreview.module.css";

const IcecreamPreview = ({ ingredients, price }) => {
    const result =[];

    for (const ingredient in ingredients) {
        result.push(<IcecreamIngredient key={ingredients[ingredient] + ingredient} type={ingredients[ingredient]} />);
    }

    return ( 
        <div className = {classes.IcecreamPreview}>
            <div className={classes.ingredients}>
                {result}
            </div>
            <div className={classes.price}>{price.toFixed(1)} som</div>
        </div>
    );
}
 
export default IcecreamPreview;