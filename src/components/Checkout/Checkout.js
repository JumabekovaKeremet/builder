
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"
import IcecreamPreview from "../IcecreamBuilder/IcecreamPreview/IcecreamPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-5666c-default-rtdb.firebaseio.com//orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: {
        tomato: 10,
        salami: 10,
        redPepper: 10,
        yellowPepper: 10,
        greenOlive: 10,
        blackOlive: 10,
      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }
  return (
    <div>
      <CheckoutSummary cancelCallback={cancelCallback} />
      <IcecreamPreview ingredients={{
        chocolate: 5, 
        strawbarry: 1,
        bananas: 2,
      }} price={150} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
export default Checkout;