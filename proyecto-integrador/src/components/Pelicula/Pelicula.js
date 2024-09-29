import React, {Component} from "react";
import "./Pelicula.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Pelicula extends Component {
    constructor(props) {
        super(props);
        
        this.state= {
            verDescripcion: false,
            esFavorito: false
        }
    };  
    
    

    componentDidMount(){
        const storage= localStorage.getItem("Favoritos")
        if( storage !== null){
            const parsedStorage= JSON.parse(storage);
            const estaEnFavoritos= parsedStorage.includes(this.props.pelicula.id)
            if(estaEnFavoritos){
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    verDescripcion()
        {this.setState({
            verDescripcion: !this.state.verDescripcion
        })};
    
    agregarFavoritos(){
        const storage = localStorage.getItem("Favoritos")
        if (storage !== null){
            const parsedStorage = JSON.parse(storage);
            parsedStorage.push(this.props.pelicula.id)
            const stringStorage = JSON.stringify(parsedStorage)
            localStorage.setItem("Favoritos", stringStorage)
        } else {
            const primerFavorito = [this.props.pelicula.id]
            const stringStorage  = JSON.stringify(primerFavorito)
            localStorage.setItem("Favoritos", stringStorage)
        }
        this.setState({
            esFavorito: true
        })
    };

    quitarFavoritos(){
        const storage= localStorage.getItem("Favoritos")
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos= parsedStorage.filter((id) => id !== this.props.pelicula.id)
        const stringStorage= JSON.stringify(restoFavoritos)
        localStorage.setItem("Favoritos", stringStorage)
        this.setState({
            esFavorito: false
        })
        }; 
    
    render() {
        const {poster_path, original_title, overview,id} = this.props.pelicula;
        console.log("titulo: ", this.props.pelicula);
        
        return (
            <>
            <article className='pelicula-single'>
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
            <h2> {original_title}</h2> 
            
            
            <p className='more'
            onClick={()=> this.verDescripcion()} > 
            {this.state.verDescripcion ? "Ver menos" : "Ver descripción"}</p> 

            {this.state.verDescripcion && (
            <section className='extra'>
            
            <p> {overview}</p> 

            </section> )} 

            <Link className= "detalleLink" to={`/pelicula/id/${id}`}>Ir a detalle</Link>
            <button onClick={() => !this.state.esFavorito ? this.agregarFavoritos() : 
                this.quitarFavoritos()}>{!this.state.esFavorito ? " ♥ Agregar a favoritos" : "Eliminar de favoritos"}</button> 




            </article>
        </>

        )
    }
};

export default Pelicula; 
