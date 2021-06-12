import React, { useState } from 'react';
// import { Input } from "reactstrap";

function MenuPlanForm () {
    const menuPlan = [
        { menus : 1 },
       
        ] 
    function handleSubmit (e) {

    }

    return (
        <div>
            <form>
                <h3>Select Menu</h3>
                <input type="select" />
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