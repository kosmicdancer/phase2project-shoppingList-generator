import React, {useState} from 'react';

function CheckInItemForm () {
    const [items, setItems] = useState([]);
    // const [DoP, setDoP] = useState([]);

    function HandleCheckInSubmit (e) {
        e.preventDefault();
        fetch("https://phase2project-json.herokuapp.com/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body : JSON.stringfy ({
            items}),
        })
            .then(r => r.json())
            .then(newItem => {
            const newItems = [...items, newItem];
            setItems(newItems);
          })
        }

    return (
            <div>
                <form onSubmit={HandleCheckInSubmit}>
                    <label>Enter Item Name</label>
                    <input type='text'class="form-control" placeholder="item name" />
                    <label>Enter Date of Purchase</label>
                    <input type='text'class="form-control" placeholder="dd-mm-yyyy" />
                    <button class="btn btn-secondary">Check in Item</button>
                </form>
            </div>
        )
    }
    

    export default CheckInItemForm
    
    

    
    