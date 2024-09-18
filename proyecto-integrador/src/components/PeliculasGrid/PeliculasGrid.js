import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculaGrid.css"; 


class PeliculasGrid extends Component {
    constructor() {
        super();
        this.state= {
            peliculas:[],
        }
    }

    componentDidMount(){
        fetch(this.props.endPoint)
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas:data.results.slice(0,5)})
            }))
        .catch(error => console.log(error));
        
    }

    render() {
        return (
        <>
        <section className='cardContainer'>
            {
               this.state.peliculas.map((pelicula, idx) => 
                (<Pelicula pelicula= {pelicula} key= {idx}/>))
               
            }
        </section>

        </>
        )
    }
};

export default PeliculasGrid; 
