import React from 'react';

function ShoppingListContainer () {
    const itemsToShop = ({isInInventory}) => {
        !isInInventory ? itemsNeeded.map(menuSelection): null  }

    return (
        <div>
        <h4>Shop these</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    `${itemsToShop}`
                </li>
            </ul>
        </div>

    ); 
};

export default ShoppingListContainer