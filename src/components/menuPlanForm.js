import React, { useState, useEffect } from 'react';

function MenuPlanForm () {
    const [menus, setMenus] = useState([])
               
    function HandleMenuSelect (e) {
        e.preventDefault();
        
        useEffect(() => {
            fetch("https://phase2project-json.herokuapp.com/menus")         
            .then(r => r.json())         
            .then(data => setMenus(data.menus))},[])
            console.log(menus)
            }
  
    return (
        <div>
            <form onSelect>
                <h3>Select Menu</h3>
                <select value={menus} onSelect={HandleMenuSelect} class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                    <option value='Shrimp Tempura Soba'>Shrimp Tempura Soba</option>
                    <option value='Veggie Curry & Rice'>Veggie Curry + Rice</option>
                    <option value='Okonomi-Yaki'>Okonomi-Yaki</option>
                    <option value='Omu-Rice'>Omu-Rice</option>
                    <option value='Grilled Fish Teishoku'>Grilled Fish Teishoku</option>
                    <option value='Oyako Don'>Oyako Don</option>
                </select>
                <input type="submit" value="Submit" class="btn btn-secondary"/>
            </form>
        </div>
     );
}
 
export default MenuPlanForm;

// function App() {
//     const options = [
//       { option1: "1" },
//       { option2: "2" },
//       { option3: "3" },
//       { option4: "4" }
//     ];
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <Input type="select">
//           {options.map(option => {
//             return (
//               <option value={Object.values(option)}>
//                 {" "}
//                 {Object.keys(option)}{" "}
//               </option>
//             );
//           })}
//         </Input>
//       </div>
//     );
//   }