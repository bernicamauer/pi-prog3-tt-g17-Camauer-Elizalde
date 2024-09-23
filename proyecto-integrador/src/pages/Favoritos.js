import { Component } from "react";
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas:[],

        }
    }

    componentDidMount() {
        const storage = localStorage.getItem("Favoritos")
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=888daf91ec4c7d2157c8904388a1ed3e`)
                    .then((response) => response.json())
                ))
                    .then((data) => {
                        console.log("data: ", data);
                        
                        this.setState({
                            peliculas: data
                        })
                    })
            
        }
    }

    render() {
        return (
            <>

                <PeliculasGrid peliculas={this.state.peliculas} />
            </>

        )

    }
}

export default Favoritos;