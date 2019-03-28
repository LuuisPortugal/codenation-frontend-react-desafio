import React from 'react'
import Highlight from 'react-highlighter';

const RecipeItem = ({oRecipe, searchString}) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={oRecipe.thumbnail || ''} alt={oRecipe.title || ''}/>
            <div className="card-body">
                <h5 className="card-title">
                    <Highlight search={searchString}>{oRecipe.title || ''}</Highlight>
                </h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>
                    <Highlight search={searchString}>{oRecipe.ingredients || ''}</Highlight>
                </p>
            </div>
        </div>
    </div>
);

export default RecipeItem;