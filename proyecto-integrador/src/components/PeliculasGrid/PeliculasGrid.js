import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculasGrid.css"; 


class PeliculasGrid extends Component {
    constructor(props) {
        super(props);

    }

 

    render() {
        const { peliculas } = this.props;

        if (peliculas.length === 0) {
            return <p className="noResult">No se encontraron películas.</p>;
        }
        
        return (
        <>
        
        <section className='cardContainer'>
           { this.props.peliculas.map((pelicula, idx) => 
            <Pelicula 
                pelicula={pelicula} 
                key= {idx}
            />)
            }
            
               
        </section>
        
        
        </>
        )
    }
};

export default PeliculasGrid;