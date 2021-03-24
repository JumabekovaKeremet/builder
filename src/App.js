import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./components/PizzaBuilder/PizzaBuilder";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        Pizza Builder by master Keremet Jumabekova
        <PizzaBuilder/>
      </Layout>
    </div>
  );
}

export default App;

