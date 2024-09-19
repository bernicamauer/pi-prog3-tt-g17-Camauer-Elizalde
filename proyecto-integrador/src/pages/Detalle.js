import Pelicula from "../components/Pelicula/Pelicula"
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid"




const Detalle =({match})=>{
    const {id} =match.params
    const peliculas= this.props.peliculas
    const pelicula = peliculas.find((pelicula)=>pelicula.id === id )
    return(
     <Pelicula pelicula = {pelicula}/>
    )
}
export default Detalle