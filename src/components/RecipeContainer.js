import React, {Component} from 'react';

import RecipeItem from './RecipeItem';
import recipes from "./../sample_data/recipes.json";

export default class RecipeContainer extends Component {
    getSearchStringPrepared = () => this.props.searchString
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');

    onRecipeFilter = oRecipe => {
        let pattern = new RegExp(this.getSearchStringPrepared(), 'gi');
        return pattern.test(oRecipe.title) || pattern.test(oRecipe.ingredients);
    };

    onRecipeMap = oRecipe =>
        <RecipeItem
            key={oRecipe.title}
            oRecipe={oRecipe}
            searchString={this.props.searchString}/>;

    render() {
        let aFiltered = recipes.results
            .filter(this.onRecipeFilter)
            .map(this.onRecipeMap);

        return (
            <div className="row">
                {aFiltered.length ? aFiltered : <h1 className="mx-auto mt-5">No Result to show</h1>}
            </div>
        );
    }
}