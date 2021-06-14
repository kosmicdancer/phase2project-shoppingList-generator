import React from 'react';
import {menuSelection} from './menuPlanForm';

function ItemsNeededListContainer ({menuSelection}) {
// const { id, ingredients } = itemsNeeded 
    return (
        <div>
            <h4>{menuSelection}</h4>
            <p><strong>Ingredients:</strong></p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">key={menus.id}, item={menus.ingredients} </li>
            </ul>
        </div>

    )
}

export default ItemsNeededListContainer
export {itemsNeeded}