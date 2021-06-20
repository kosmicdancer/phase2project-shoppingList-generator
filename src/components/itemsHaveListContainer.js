import React from 'react'

function ItemsHaveListContainer() {
    // const ingredients = {ingredients}
    // const items = {items}
    const itemsHave = ({ingredients, items}) => {
        ({ingredients}.filter(ingredients === items.item))         
        }
    
    return (
        <div>
            <h4>Have these</h4>
            <ul class="list-group">
                <li class="list-group-item">
                    {itemsHave}
                </li>
            </ul>
        </div>
    )
}

export default ItemsHaveListContainer