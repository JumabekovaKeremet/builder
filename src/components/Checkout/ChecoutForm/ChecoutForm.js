import classes from "./ChecoutForm.module.css";

const CheckoutForm = ({ cancelCallback, submitCallback }) => {
  return (
    <form className={classes.ChecoutForm} onSubmit={submitCallback}>
      <div className={classes.ChecoutForm}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          pattern="0[0-9]{9}"
        />
      </div>
      <button>Checkout</button>
      <button onClick={cancelCallback}>Cancel</button>
    </form>
  );
};

export default CheckoutForm;
