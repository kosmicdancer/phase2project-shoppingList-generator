import React, { useState, useEffect } from 'react';

function MenuPlanForm () {
    const [menu, setMenu] = useState('')
    // const { name } = menuSelection 
  
    
        useEffect(() => {
            fetch("https://phase2project-json.herokuapp.com/menus")         
            .then(r => r.json())         
            .then(data => setMenu(data.menu))},[])
            // console.log(menuSelection)
            
            
    function handleChange (event) { 
        setMenu({value: event.target.value});
        }

    function handleSubmit (event) {
        event.preventDefault();
        };
            
    return (
        <div>
            <form onChange={handleChange}>
                <label><h3>Select Menu</h3></label>
                <select  value={menu}   class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                
                    <option value='Shrimp Tempura Soba'>Shrimp Tempura Soba</option>
                    <option value='Veggie Curry & Rice'>Veggie Curry + Rice</option>
                    <option value='Okonomi-Yaki'>Okonomi-Yaki</option>
                    <option value='Omu-Rice'>Omu-Rice</option>
                    <option value='Grilled Fish Teishoku'>Grilled Fish Teishoku</option>
                    <option value='Oyako Don'>Oyako Don</option>
                </select>
                <input type="submit" value="Submit" onSubmit={handleSubmit} class="btn btn-secondary"/>
            </form>
        </div>
     );
}
 
export default MenuPlanForm;
// export {menuSelection};
