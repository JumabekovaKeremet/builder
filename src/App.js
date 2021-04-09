import Layout from "./components/Layout/Layout";
import IcecreamBuilder from "./components/IcecreamBuilder/IcecreamBuilder";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        Pizza Builder by master Keremet Jumabekova
        <IcecreamBuilder/>
      </Layout>
    </div>
  );
}

export default App;

