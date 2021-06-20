import React, {useState} from 'react';

function CheckInItemForm ({onCheckInItem}) {
    const [items, setItems] = useState('');
    const [DoP, setDoP] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        fetch("https://phase2project-json.herokuapp.com/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body : JSON.stringify ({
            item: items, 
            DoP: DoP
            }),
        })
            .then(r => r.json())
            .then(item => 
            onCheckInItem(item));
          }
    
    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Enter Item Name</label>
                    <input type='text' placeholder="item name" value={items} onChange={(e) => setItems(e.target.value)} class="form-control"/>
                    <label>Enter Date of Purchase</label>
                    <input type='date' placeholder="dd-mm-yyyy" value={DoP} onChange={(e) => setDoP(e.target.value)} class="form-control"/>
                    <button class="btn btn-secondary">Check in Item</button>
                </form>
            </div>
        )
    }

    

    export default CheckInItemForm
    
    

    
    