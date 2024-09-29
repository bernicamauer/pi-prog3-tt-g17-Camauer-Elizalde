import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Cartelera from "./pages/Cartelera";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import DetallePagina from "./pages/DetallePagina";
import Populares from "./pages/Populares";

function App() {
  return (
    <>
      <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favoritos" component={Favoritos} />
          <Route exact path="/peliculaspopulares" component={Populares} />
          <Route exact path="/cartelerapeliculas" component={Cartelera} />
          <Route exact path="/pelicula/id/:id" component={DetallePagina} />
          <Route component={SearchResults} path="/search"/>
          <Route exact path="" component={NotFound}/> 


          
          
        </Switch>

        

      <Footer />
    </>
  );
}

export default App;
