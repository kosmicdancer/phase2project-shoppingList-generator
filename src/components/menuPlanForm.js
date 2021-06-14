import React, { useState, useEffect } from 'react';

function MenuPlanForm () {
    const [menuSelection, setMenuSelection] = useState([])
    // const menuSelection = (menus.name)
               
    function handleMenuSelect () {
        useEffect(() => {
            fetch("https://phase2project-json.herokuapp.com/menus")         
            .then(r => r.json())         
            .then(data => setMenuSelection(data.menus))})
            console.log(menuSelection)
            }
  
    return (
        <div>
            <form>
                <h3>Select Menu</h3>
                <select value={menuSelection} onSelect={handleMenuSelect} class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value={menuSelection}>`${menuSelection}`</option>
                    {/* <option value='Shrimp Tempura Soba'>Shrimp Tempura Soba</option> */}
                    {/* <option value='Veggie Curry & Rice'>Veggie Curry + Rice</option>
                    <option value='Okonomi-Yaki'>Okonomi-Yaki</option>
                    <option value='Omu-Rice'>Omu-Rice</option>
                    <option value='Grilled Fish Teishoku'>Grilled Fish Teishoku</option>
                    <option value='Oyako Don'>Oyako Don</option> */}
                </select>
                <input type="submit" value="Submit" class="btn btn-secondary"/>
            </form>
        </div>
     );
}
 
export default MenuPlanForm;
export {menuSelection};
