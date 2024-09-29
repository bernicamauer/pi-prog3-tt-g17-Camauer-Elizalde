import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar= () => {
    
    return (
        <>
            <ul className="main-nav">
           

                <li><Link to="/"><img src="./img/logoPelicula.png" alt="" /></Link></li>
                <li><Link className="elemento" to="/">Home</Link></li>
                <li><Link className="elemento"to="/favoritos">Favoritos</Link></li>
                <li><Link className="elemento"to="/peliculaspopulares">Peliculas populares</Link></li>
                <li><Link className="elemento"to="/cartelerapeliculas">Cartelera Peliculas</Link></li>

            
   

                
            </ul>
            
        </>
    )
}

export default Navbar