
import classes from "./Logo.module.css";
import logo from "../../img/logo.svg";
const Logo = ({children}) => {
    return (  
        <div className={classes.Logo}>
            
            <img src={logo} alt="logo"/>
            <div>Pizza</div>
        </div>
    );
}
 
export default Logo;