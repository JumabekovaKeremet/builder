import CheckoutSummary from "../Checkout/CheckoutSummary/CheckoutSummary";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
    <div>
      <CheckoutSummary cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default Checkout;