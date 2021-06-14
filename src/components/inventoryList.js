import React, {useState, useEffect} from 'react';
import CheckInItemForm from './checkInItemForm';


function InventoryList () {
    const [items, setItems] = useState([]);
    const { id, item, DoP } = itemInventory

    function handleCheckInventory () {
        useEffect (() => {
        fetch("https://phase2project-json.herokuapp.com/items") 
        .then(r => r.json())         
        .then(data => setItems(data.items))})
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
            <button onClick={handleCheckInventory}>Display</button>
            <div> {itemInventory}
            key={id},
            item={item},
            DoP={DoP}
            <button onClick={handleDeleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default InventoryList

