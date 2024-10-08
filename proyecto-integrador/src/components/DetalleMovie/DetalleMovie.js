import { Component } from "react";
import "./DetalleMovie.css"


class DetalleMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peliculas: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
            .then((response) => response.json())
            .then((data) => this.setState({
                peliculas: [data],
                isLoading: false
            }))
            .catch(error => console.log(error));
    }

    render() {
        const pelicula = this.state.peliculas[0];

        return (
            <section className='cardContainer'>
                {this.state.isLoading ? (
                    <div className="lds-spinner">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                ) : (
                    
                        <article className='pelicula-single'>
                            <img src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} alt="" />
                            <h2>{pelicula.original_title}</h2>
                            <p><strong>Sinopsis:</strong> {pelicula.overview}</p>
                            <p><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                            <p><strong>Rating:</strong> {pelicula.vote_average}</p>
                            <p><strong>Duración:</strong> {pelicula.runtime} minutos</p>
                            <p><strong>Género:</strong> {pelicula.genres.map(genero => genero.name).join(", ")}</p>
                        </article>
                
                )}
            </section>
        );}
}

export default DetalleMovie;