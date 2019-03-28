import React, {Component} from 'react';

import RecipeItem from './RecipeItem';
import recipes from "./../sample_data/recipes.json";

export default class RecipeContainer extends Component {
    getSearchStringPrepared = () => this.props
        .searchString
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');

    render() {
        let pattern = new RegExp(this.getSearchStringPrepared(), 'gi');
        let aFiltered = recipes.results
            .filter(oRecipe => pattern.test(oRecipe.title) || pattern.test(oRecipe.ingredients))
            .map(oRecipe    => <RecipeItem key={oRecipe.title} oRecipe={oRecipe} searchString={this.props.searchString}/>);

        if (aFiltered.length) {
            return (
                <div className="row">
                    {aFiltered}
                </div>
            );
        }

        return (
            <div className="row justify-content-center pt-5">
                <h1>No Result to show</h1>
            </div>
        );
    }
}