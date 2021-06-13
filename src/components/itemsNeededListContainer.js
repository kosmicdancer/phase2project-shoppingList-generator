import React from 'react';

function itemsNeededListContainer ({menus}) {
    
    return (
        <div>
            <h4>Menu Name</h4>
            <p><strong>Ingredients:</strong></p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ing1</li>
                <li class="list-group-item">ing2</li>
            </ul>
        </div>

    )
}

export default itemsNeededListContainer