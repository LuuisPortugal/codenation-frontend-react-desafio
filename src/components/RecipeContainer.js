import React, {Component} from 'react';
import _ from 'lodash';

import RecipeItem from './RecipeItem';
import recipes from "./../sample_data/recipes.json";

export default class RecipeContainer extends Component {
    getSearchStringPrepared = () => _.escapeRegExp(this.props.searchString);

    onRecipeFilter = oRecipe => {
        let pattern = new RegExp(this.getSearchStringPrepared(), 'gi');
        return pattern.test(oRecipe.title) || pattern.test(oRecipe.ingredients);
    };

    onRecipeMap = oRecipe =>
        <RecipeItem
            key={oRecipe.title}
            oRecipe={oRecipe}
            searchString={this.getSearchStringPrepared()}/>;

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