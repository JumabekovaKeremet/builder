import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import IcecreamIngredient from "../../IcecreamIngredient/IcecreamIngredient";
import classes from "./IcecreamControl.module.css";

const IcecreamControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.IcecreamControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <IcecreamIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}
// const IcecreamControl = ({ type, count }) => {
 

//   const dispatch = useDispatch();
//   const types = {
//     red: {
//       width: "50px",
//       height: "50px",
//       backgroundColor: "red",
//       borderRadius: "50%",
//       border: "3px soild red",
//     },
//     blue: {
//       width: "50px",
//       height: "50px",
//       backgroundColor: "blue",
//       borderRadius: "50%",
//       border: "3px soild red",
//     },
//     yellow: {
//       width: "50px",
//       height: "50px",
//       backgroundColor: "yellow",
//       borderRadius: "50%",
//       border: "3px soild red",
//     },
//     pink: {
//       width: "50px",
//       height: "50px",
//       backgroundColor: "pink",
//       borderRadius: "50%",
//       border: "3px soild red",
//     },
//     green: {
//       width: "50px",
//       height: "50 px",
//       backgroundColor: "green",
//       borderRadius: "50%",
//       border: "3px soild red",
//     },
//     purple: {
//       width: "50px",
//       height: "50px",
//       backgroundColor: "purple",
//       borderRadius: "50%",
//       border: "3 soild red",
//     },
//   };
//   return (
//     <div className={classes.IcecreamControl} style={types[type]}>
//       <Button onClick={() => dispatch(add(type))}>+</Button>

//       <Button onClick={() => dispatch(remove(type))} disabled={!count}>
//         -
//       </Button>
//     </div>
//   );
// };
export default IcecreamControl;

