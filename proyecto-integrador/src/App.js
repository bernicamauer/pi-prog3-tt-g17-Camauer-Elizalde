import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";

function App() {
  return (
    <>
      <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route exact path="/peliculaspopulares" component={Populares} />
          <Route exact path="/cartelerapeliculas" component={Cartelera} />
          
          
        </Switch>

      <Footer />
    </>
  );
}

export default App;
