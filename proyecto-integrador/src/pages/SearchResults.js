import { Component } from "react";

import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            isLoading: true,
        };
    }

    componentDidMount() {
       
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=888daf91ec4c7d2157c8904388a1ed3e&query=${this.props.location.state.query}`)
            .then((response) => response.json())
            .then((data) => {
              
                this.setState({
                    peliculas: data.results,
                    isLoading: false,
                    
                }
            );
            }
        )
            .catch((e) => console.log(e));
    }

    render() {
        
        return (
            <>
               
               
                {this.state.isLoading ? (
                    <p>Cargando...</p> 
                ) : (
                    <PeliculasGrid  peliculas={this.state.peliculas} />
                )}
                
            </>
        );
 

    }
}

export default SearchResults;
