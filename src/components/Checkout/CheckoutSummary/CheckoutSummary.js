import classes from "./CheckoutSummary.module.classes";
import IcecreamPreview from "../IcecreamBuilder/IcecreamPreview/IcecreamPreview";

  return (
    <div>
      <CheckoutSummary cancelCallback={cancelCallback} />
      <IcecreamPreview ingredients={{
        tomato: 5, 
        salami: 10,
        greenOlive: 50,
      }} price={150} />
      <CheckoutForm />
    </div>
  );


export default CheckoutSummary; 