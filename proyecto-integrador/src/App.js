import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route exact path="/peliculaspopulares" component={Populares} />
          <Route exact path="/cartelerapeliculas" component={Cartelera} />
          <Route exact path="/pelicula/id/:id" component={Detalle} />
          <Route exact path="" component={NotFound}/> 


          
          
        </Switch>

        

      <Footer />
    </>
  );
}

export default App;
