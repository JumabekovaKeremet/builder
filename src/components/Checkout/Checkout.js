import ChecoutForm from "./ChecoutForm/ChecoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";
import IcecreamPreview from "../IcecreamBuilder/IcecreamPreview/IcecreamPreview";

const Checkout = ({ history }) => {
  const { token, id } = useSelector((state) => state.auth);
  const ingredients = useSelector((state) => state.builder.ingredients);
  const price = useSelector((state) => state.builder.price);

  function cancelCallback() {
    history.replace("/");
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios
      .post("/orders.json?auth=" + token, {
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        ingredients: ingredients,
        price: price,
        userId: id,
      })
      .then((response) => {
        history.replace("/");
      });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <IcecreamPreview ingredients={ingredients} price={price} />
      <ChecoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
};

export default withAxios(Checkout, axios);
