import React from 'react';
import ItemsHaveListContainer from './itemsHaveListContainer';
import itemsNeededListContainer from './itemsNeededListContainer';

function InventoryList () {
    // fetch ('https://localhost3000/items') {
    //     .then 
    // }



    return (
        <div>
            <h4>Check Inventory</h4>
            <table className='table'>
                <tr>
                    <td>Item name:</td><td>DoP:</td>
                </tr>
                <tr>
                    <td>Soba</td>
                    <td> 06/01/2021</td>
                    <td><button>Delete</button></td>
                </tr>
            </table>
        </div>
    )
}

export default InventoryList