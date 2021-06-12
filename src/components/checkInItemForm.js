import React from 'react';

function CheckInItemForm () {

    return (
        <div>
            <form>
                <label>Enter Item Name</label>
                <input type='text' /><br/>
                <label>Enter Date of Purchase</label>
                <input type='text' /><br/>
                <button>Check in Item</button>

            </form>
        </div>
        
    )
}


export default CheckInItemForm