import React, {useState, useEffect} from 'react';
import Item from './Item'
// import CheckInItemForm from './CheckInItemForm';

function InventoryList () {
    const [items, setItems] = useState([]);
    // const {id, item, DoP} = items


        useEffect (() => {
        fetch("https://phase2project-json.herokuapp.com/items") 
        .then(r => r.json())         
        .then((items) => setItems(items));
    }, []);
    
    function handleCheckInventory () {
        const inventoryList = (items.map((item) => 
        <Item />
        )
        )}

    
    return (
        <div>
            <h4>Check Inventory</h4>
            <button class="btn btn-secondary" onClick={handleCheckInventory}>Check Now</button>
            <div class="d-grid gap-1 d-md-flex justify-content-md-end">
                <ul class="list-group">
                    <InventoryList />
                    <li><Item /></li>
                </ul>

            </div>
        </div>
    )
}

export default InventoryList

