import { Component } from "react";

class Busqueda extends Component{
    constructor(props){
        super(props);

        this.state= {
            query: "",
        };
    }

    evitarSubmit(e){
        e.preventDefault()
    };

    controlarCambios(e){
        this.setState({
            query: e.target.value
        })
           
    }

    mandarSubmit (){
        this.props.history.push("/search", { query: this.state.query})
    }

    render() {
        return(
            <>
             <div>
                <form onSubmit= {(e) => this.evitarSubmit(e)}>
                    <input 
                            placeholder="Busca la película"
                            name= "query"
                            onChange= {(e) => this.controlarCambios(e)}
                            value= {this.state.query}
                    
                    />

                    <button onClick={()=> this.mandarSubmit}> Search</button>

                </form>

             </div>
            </>
        )
    }
}

export default Busqueda;