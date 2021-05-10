import Layout from "./components/Layout/Layout";
import IcecreamBuilder from "./components/IcecreamBuilder/IcecreamBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Route path="/" component={IcecreamBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
      </Layout>
    </div>
  );
}

export default App;