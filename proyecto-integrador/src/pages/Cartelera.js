import React, {Component} from "react";
import Pelicula from "../components/Pelicula/Pelicula";
import "./Cartelera.css"


class Cartelera extends Component {
    constructor() {
        super();
        this.state= {
            peliculas:[],
            peliculasFiltradas:[],
            filterValue: "",
            isLoading: true,
            actualPage: 1 
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=888daf91ec4c7d2157c8904388a1ed3e&page=${this.state.actualPage}` )
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas: data.results,
                peliculasFiltradas: data.results,
                isLoading: false,
                actualPage: this.state.actualPage + 1
        })
            }))
        .catch(error => console.log(error));
        
    }

    handleLoadMore(){ 
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=888daf91ec4c7d2157c8904388a1ed3e&page=${this.state.actualPage}` )
        .then((response) => response.json())
        .then((data) => this.setState(
            {datos: this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                peliculasFiltradas: this.state.peliculasFiltradas.concat(data.results),
                isLoading: false,
                actualPage: this.state.actualPage + 1
        })
            }))
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
    handleResetFilter(){
        this.setState(
            {
                filterValue:"",
                peliculasFiltradas:this.state.peliculas

            }
        )
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
                onClick= {()=> this.handleResetFilter()}
                type= "submit"> Reset Filter </button>

            
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
    <button className="load-more-btn" onClick={() => this.handleLoadMore()}> Cargar Más</button>
     
        </>
        )
    }
};

export default Cartelera;