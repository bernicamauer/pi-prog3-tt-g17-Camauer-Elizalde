import { Component } from "react";
import PeliculasGrid from "../components/PeliculasGridHome/PeliculasGridHome";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            isLoading: true,
            query:""
        };
    }

    handleFormSubmit (){
        this.props.history.push("/search",{query:this.state.query})
    }

    handleCancelSubmit(e){
        e.preventDefault()
    };

    handleChanges(e){
        this.setState({
            query: e.target.value
        })
           
    }

  

    componentDidMount() {
      
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=888daf91ec4c7d2157c8904388a1ed3e')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results,
                    isLoading: false,
                    
                });
            })
            .catch((e) => console.log(e));
    }

    render() {
        return (
            <>
           
           <div>
                <form onSubmit= {(e) => this.handleCancelSubmit(e)}>
                    <input 
                            placeholder="Busca la película"
                            name= "query"
                            onChange= {(e) => this.handleChanges(e)}
                            value= {this.state.query}
                    
                    />

                    <button onClick={()=> this.handleFormSubmit()}> Search</button>

                </form>

             </div>
                {this.state.isLoading ? (
                    <p>Cargando..</p>
                ) : (
                    <PeliculasGrid peliculas={this.state.peliculas} />
                )
                
                }
                
            </>
        );
    }
}

export default SearchResults;