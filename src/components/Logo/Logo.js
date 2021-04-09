import classes from "./Logo.module.css"
import logo from "../../img/logo.svg"
const Logo = () => {
    return ( 
        <div className={classes.Logo}>
            <img  alt="Logo of the Icecream project" src={logo} className={classes.Logo} />
            <div>Icecream</div>
        </div>
     );
}
 
export default Logo;