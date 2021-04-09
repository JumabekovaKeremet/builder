import classes from "./Nav.module.css"

const Nav = () => {
    return ( 
        <ul className={classes.Nav}>
            <NavItem url="/" activ>Builder</NavItem>
            <NavItem url="/">Checkout</NavItem>
        </ul>
     );
}
 
export default Nav;