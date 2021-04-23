import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import IcecreamPreview from "../../IcecreamBuilder/IcecreamPreview/IcecreamPreview";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <IcecreamPreview ingredients={{
          chocolate: 5, 
          strawbarry: 5,
          lactic: 2,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;