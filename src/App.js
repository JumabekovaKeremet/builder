import Layout from "./components/Layout/Layout";
import IcecreamBuilder from "./components/IcecreamBuilder/IcecreamBuilder";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
       Ice cream 
        <IcecreamBuilder/>
      </Layout>
    </div>
  );
}

export default App;

