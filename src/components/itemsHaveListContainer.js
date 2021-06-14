import React from 'react';
import { itemsNeeded } from './itemsNeededListContainer';
import { menuSelection } from './menuPlanForm';

function ItemsHaveListContainer({}) {
    function itemsHave ({isInInventory}) {
        (isInInventory ? itemsNeeded.map(menuSelection) : null )
    } 
    return (
        <div>
            <h4>Have these</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    `${itemsHave}`
                </li>
            </ul>
        </div>
    )
}

export default ItemsHaveListContainer