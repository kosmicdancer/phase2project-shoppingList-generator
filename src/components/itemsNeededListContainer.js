import React from 'react';
import MenuPlanForm from './MenuPlanForm';

function ItemsNeededListContainer () {
    
    const ItemsNeededList = (({name, ingredients}) => {
        // name.map(ingredients)
        return (
        <ul class="list-group">
            <ui class="list-group-item">{ingredients}</ui>
        </ul>
        )})


    return ( 
        <div>
            <MenuPlanForm />
            <p><strong>Ingredients:</strong></p>
            <ItemsNeededList />
            {/* <ul class="list-group list-group-flush">
                <li class="list-group-item" item={ingredients}></li>
            </ul> */}
        </div>
    )
}

export default ItemsNeededListContainer
// export {itemsNeeded}