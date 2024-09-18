import React, {Component} from "react";
import Pelicula from "../components/Pelicula/Pelicula";


class Cartelera extends Component {
    constructor() {
        super();
        this.state= {
            peliculas:[],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=888daf91ec4c7d2157c8904388a1ed3e' )
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas:data.results})
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

export default Cartelera; 
