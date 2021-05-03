
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"
import IcecreamPreview from "../IcecreamBuilder/IcecreamPreview/IcecreamPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = ({ history }) => {
  function cancelCallback() {
const Checkout = ({ history }) => {

  return (
    <div>
      <CheckoutSummary cancelCallback={cancelCallback} />
      <IcecreamPreview ingredients={{
        chocolate: 5, 
        strawbarry: 1,
        bananas: 2,
      }} price={150} />
      <CheckoutForm />
    </div>
  );
}
export default Checkout;