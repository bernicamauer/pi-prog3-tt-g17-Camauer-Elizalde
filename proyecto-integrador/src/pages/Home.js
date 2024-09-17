import Busqueda from "../components/Busqueda/Busqueda";
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";

const Home = () => {
    return (
        <>
       <main>
          <section>
            <Busqueda/>
          <h2>Películas en cartelera</h2>
          <PeliculasGrid/>
        
          <h2>Películas más populares</h2>
          <PeliculasGrid/>
          
          </section>
        </main>
        </>
    )
}

export default Home;