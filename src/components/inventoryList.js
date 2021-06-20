import React, {useState, useEffect} from 'react';
// import CheckInItemForm from './CheckInItemForm';

function InventoryList () {
    const [items, setItems] = useState([]);
    // const { id, item, DoP } = items

        useEffect (() => {
        fetch("https://phase2project-json.herokuapp.com/items") 
        .then(r => r.json())         
        .then(data => setItems(data.items))})
    
    function handleCheckInventory () {
        setItems({items})
        }

    function handleDeleteItem (id) {
        fetch(`https://phase2project-json.herokuapp.com/items/${id}`, {method: "DELETE"})
        .then(r => r.json())
        .then(() => {
            const updatedInventory = items.filter((q) => q.id !== id);
            setItems(updatedInventory);}
        )}
    
    return (
        <div>
            <h4>Check Inventory</h4>
            <button class="btn btn-secondary" onClick={handleCheckInventory}>Check Now</button>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                    <button class="btn btn-secondary" onClick={handleDeleteItem}>Delete</button>
                    </li>
                </ul>
            {/* item={items.item},
            DoP={items.DoP} */}
            
            </div>
        </div>
    )
}

export default InventoryList

