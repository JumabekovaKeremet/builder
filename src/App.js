
import Layout from "./components/Layout/Layout";
import Toolbar from "./components/Toolbar/Toolbar";
import Nav from "./components/Nav/Nav";
import classes from "./App.css"
import Logo from "./components/Logo/Logo";
function App() {
  return (
    <div className="App">
      <Layout>
        <Toolbar/>
        <Logo/>

     <h1> Pizza Builder by master Keremet Jumabekoba</h1>
      </Layout>
    </div>
  );
}

export default App;
