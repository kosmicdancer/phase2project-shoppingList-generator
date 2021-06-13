import React, {useState, useEffect} from 'react';

function InventoryList ({ item, DoP }) {
    const [items, setItems] = useState([]);
    

    // function HandleInventoryDisplay () {
        useEffect (() => {
        fetch("https://phase2project-json.herokuapp.com/items") 
        .then(r => r.json())         
        .then(data => setItems(data.items))},[])

    function HandleDeleteItem (id) {
        fetch(`https://phase2project-json.herokuapp.com/items/${id}`, {method: "DELETE"})
        .then(r => r.json())
        .then(() => {
            const updatedInventory = items.filter((q) => q.id !== id);
            setItems(updatedInventory);}
        )}
    
    return (
        <div>
            <h4>Check Inventory</h4>
            <table className='table'>
                <tr>
                    <td>Item name:</td><td>DoP:</td>
                </tr>
                <tr>
                    <td>{item}</td>
                    <td>{DoP}</td>
                    <td><button onClick={HandleDeleteItem} className="delete">Delete</button></td>
                </tr>
            </table>
        </div>
    )
}

export default InventoryList