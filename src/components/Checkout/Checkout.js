  
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
        chocolate: 4,
        lactic: 1,
        strawbarry: 2,
        bananas: 2,
        pistachio: 5,
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