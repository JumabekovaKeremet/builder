import IcecreamPreview from "../IcecreamBuilder/IcecreamPreview/IcecreamPreview";
import CheckoutForm from "./ChecoutForm/ChecoutForm";
import axios from "axios";
import { useSelector } from "react-redux";

import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-5666c-default-rtdb.firebaseio.com//orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: ingredients,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div>
      <IcecreamPreview ingredients={ingredients} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}

export default withAxios(Checkout, axios); 