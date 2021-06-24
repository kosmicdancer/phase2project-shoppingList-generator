import React from "react";

function Item({ id, item, DoP, onRemoveItem }) {
    // const [item, setItem] = useState([])

    function handleDeleteItem () {
    fetch(`https://phase2project-json.herokuapp.com/items/${id}`, 
    {method: "DELETE"})
    // .then(r => r.json())
    // .then(() => {
    //     const updatedInventory = items.filter((q) => q.id !== id);
    //     setItems(updatedInventory);}
    // )
    onRemoveItem(id);
  }


  return (
    <div className="item">
            <li class="list-group-item d-grid gap-2 d-md-flex justify-content-sm-end">
                <div>
                  item={item}, DoP={DoP}
                </div>
                <div>
                  <button onClick={handleDeleteItem} class="btn btn-secondary btn-sm">
                    X</button>
                </div>
              </li>
        </div>
    
  );
}

export default Item