import classes from "./CheckoutSummary.module.css";
import HouseplantPreview from "../../HouseplantShop/HouseplantPreview/HouseplantPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <HouseplantPreview pots={{
          bananas: 2, 
          chocolate: 3,
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