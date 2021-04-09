import IcecreamControl from "./IcecreamControl/IcecreamControl";
import classes from "./IcecreamControls.module.css";


const IcecreamControls = ({pots}) => {
    const results =[];
    for (const pot in pots) {
        results.push(<IcecreamControl 
            key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
    }
    return ( 
        <div className={classes.IcecreamControls}>{results}</div>
     );
}
 
export default IcecreamControls;