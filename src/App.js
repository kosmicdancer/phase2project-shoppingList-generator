import './App.css';
import React from 'react';
// import MenuPlanForm from './components/MenuPlanForm';
import ItemsNeededListContainer from './components/ItemsNeededListContainer';
import ItemsHaveListContainer from './components/ItemsHaveListContainer'
import ShoppingListContainer from './components/ShoppingListContainer'
import CheckInItemForm from './components/CheckInItemForm';
import InventoryList from './components/InventoryList';


function App() {
  

  return (
    <>
      <header class ="text-center p-3 mb-2 bg-secondary text-white">
        <h1>Grocery Shopping List Generator</h1>
        <p>Plan out before you go out! Check in items after each shopping!</p>
      </header>
    
      <div class="container-md p-3 mb-2 bg-light text-dark">
        <ItemsNeededListContainer />
      </div>
      <div class="container-md p-3 mb-2 bg-light text-dark">
        <ItemsHaveListContainer />
        <ShoppingListContainer />
      </div>
      <div class="container-md p-3 mb-2 bg-light text-dark">
        <CheckInItemForm />
      </div>
      <div class="container-lg p-3 mb-2 bg-light text-dark">
        <InventoryList />
      </div>
    </>

  );
}

export default App;
