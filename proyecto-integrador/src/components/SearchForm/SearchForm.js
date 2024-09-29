import { Component } from "react";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            query: "",
        };
    }

    handleCancelSubmit(e) {
        e.preventDefault();
    }

    handleChanges(e) {
        this.setState({
            query: e.target.value,
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.history.push("/search", { query: this.state.query });
    }

    
    render() {
        return (
            <>
                <div>
                    <form className= "search-form" onSubmit={(e) => this.handleFormSubmit(e)}>
                        <input
                            placeholder="Busca la película"
                            name="query"
                            onChange={(e) => this.handleChanges(e)}
                            value={this.state.query}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>

             
            </>
        );
    }
}

export default SearchForm;
