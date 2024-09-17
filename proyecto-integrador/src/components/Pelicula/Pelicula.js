import React, {Component} from "react";
import "./Pelicula.css"

class Pelicula extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state= {
            verDescripcion: false
        }
    };

    verDescripcion()
        {this.setState({
            verDescripcion: !this.state.verDescripcion
        })};
    
    
    
    render() {
        const {poster_path, original_title, overview} = this.props.pelicula;
        console.log(poster_path);
        
        return (
            <>
            <article className='pelicula-single'>
            <img src={`/img/${poster_path}`} alt="" />
            <h2> {original_title}</h2> 
            
            
            <p className='more'
            onClick={()=> this.verDescripcion()} > 
            {this.state.verDescripcion ? "Ver menos" : "Ver descripción"}</p> 

            {this.state.verDescripcion && (
            <section className='extra'>
            
            <p> {overview}</p> 

            </section> )} 

            <button> Ir a detalle</button> 
            <button> Agregar/ quitar favoritos</button> 



            </article>
        </>

        )
    }
};

export default Pelicula; 
