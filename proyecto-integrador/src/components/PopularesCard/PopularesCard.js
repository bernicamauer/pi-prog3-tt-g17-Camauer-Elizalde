import React, {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";



class PopularesCard extends Component {
    constructor() {
        super();
        this.state= {
            peliculas:[],
            peliculasFiltradas:[],
            filterValue: "",
            isLoading: true,
            page: 1 
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=888daf91ec4c7d2157c8904388a1ed3e' )
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas: data.results,
                peliculasFiltradas: data.results,
                isLoading: false,
                page: data.page 
        })
            }))
        .catch(error => console.log(error));
        
    }

    cargarMas(){
        const nextPage = this.state.page + 1; 
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${nextPage}&api_key=888daf91ec4c7d2157c8904388a1ed3e`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                page: data.page + 1,
            })
        })
        .catch(error => console.log(error));
            
    }

    handleFilterChange(e){
        const value= e.target.value;
        this.setState({
            filterValue: value,
            peliculasFiltradas: this.state.peliculas.filter(pelicula => pelicula.original_title.toLowerCase().includes(value.toLowerCase()))
        })
    }

    handleFormSubmit(){
        console.log("se envio", this.state.peliculasFiltradas);
        
    }
    

    render() {
        return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                onChange= {(e) => this.handleFilterChange(e)}
                name="peliculaFiltro"
                value= {this.state.filterValue}
                placeholder="Busca una pelicula!"/>
            <button 
                onClick= {()=> this.handleFormSubmit()}
                type= "submit"> Buscar </button>

            
        </form>

        <section className='cardContainer'>
    {this.state.isLoading ? (
        <div className="lds-spinner">
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
        </div>
    ) : (
        this.state.peliculasFiltradas.length > 0 ? (
            this.state.peliculasFiltradas.map((pelicula, idx) => (
                <Pelicula pelicula={pelicula} key={idx} 
                />
                
            ))
        )  : (
            <p>No se encontraron películas</p>
        )
        
    )}
    </section>
    <button onClick={() => this.cargarMas()}> Cargar Más</button>
        </>
        )
    }
};

export default PopularesCard;