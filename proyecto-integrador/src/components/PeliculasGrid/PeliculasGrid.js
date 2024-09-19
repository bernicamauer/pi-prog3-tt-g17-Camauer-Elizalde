import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculaGrid.css"; 


class PeliculasGrid extends Component {
    constructor() {
        super();
        this.state= {
            peliculas:[],
            isLoading: true
        }
    }

    componentDidMount(){
        fetch(this.props.endPoint)
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas:data.results.slice(0,5),
                isLoading: false 
            })
            }))
        .catch(error => console.log(error));
        
    }

    render() {

        return (
        <>
        
        <section className='cardContainer'>
            {this.state.isLoading ? <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>: this.state.peliculas.map((pelicula, idx) => 
                (<Pelicula pelicula= {pelicula} key= {idx}/>))
               
            }
               
        </section>
        
        
        </>
        )
    }
};

export default PeliculasGrid; 
