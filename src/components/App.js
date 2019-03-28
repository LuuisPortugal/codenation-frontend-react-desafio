import React, {Component} from 'react';

import Navbar from './Navbar'
import RecipeContainer from './RecipeContainer';

class App extends Component {
    state = {
        searchString: ''
    };

    onSearchStringChanged = searchString => this.setState({searchString});

    render() {
        return (
            <div className="App">
                <Navbar onSearchStringChanged={this.onSearchStringChanged}/>
                <div className="container mt-10">
                    <RecipeContainer searchString={this.state.searchString}/>
                </div>
            </div>
        );
    }
}

export default App;
