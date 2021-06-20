import React from 'react';

function ShoppingListContainer () {
    // const ingredients = {ingredients}
    // const items = {items}
    const itemsToShop = ({ingredients, items}) => {
        ({ingredients}.filter({ingredients} !== items.item))
    }

    return (
        <div>
        <h3>Shop these</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    {itemsToShop}
                </li>
            </ul>
        </div>

    ); 
};

export default ShoppingListContainer