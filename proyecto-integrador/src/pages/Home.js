import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Component } from "react";
import PeliculasGridHome from "../components/PeliculasGridHome/PeliculasGridHome";
import SearchForm from "../components/SearchForm/SearchForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <main>
          <section>
            <SearchForm history={this.props.history} />
            <h2>Películas en cartelera</h2>
            <PeliculasGridHome endPoint="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=888daf91ec4c7d2157c8904388a1ed3e" />
            <button>
              <Link to="/cartelerapeliculas">Ver todas</Link>
            </button>

            <h2>Películas más populares</h2>
            <PeliculasGridHome endPoint="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=888daf91ec4c7d2157c8904388a1ed3e" />
            <button>
              <Link to="/peliculaspopulares">Ver todas</Link>
            </button>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
