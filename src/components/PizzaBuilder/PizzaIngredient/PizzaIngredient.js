import classes from "./PizzaIngerdient.module.css";
 const PizzaIngerdient = ({type}) => {
     return ( 
         <div className={classes.PizzaIngerdient}>
             {type}
             
         </div>
      );
 }
  
 export default PizzaIngerdient;