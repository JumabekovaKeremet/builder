import Toolbar from "../Toolbar/Toolbar";
import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

const Layout = ({children}) => {
    return (  
        <div className={classes.Layout}>
            {children}
        </div>
    );
}
 
export default Layout;