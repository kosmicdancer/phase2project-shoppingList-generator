import './App.css';
import React from 'react';
import MenuPlanForm from './components/menuPlanForm';
import ItemsNeededListContainer from './components/itemsNeededListContainer';
import ItemsHaveListContainer from './components/itemsHaveListContainer'
import ShoppingListContainer from './components/shoppingListContainer'
import CheckInItemForm from './components/checkInItemForm';
import InventoryList from './components/inventoryList';


function App() {
  

  return (
    <div class="container-lg p-3 mb-2 bg-light text-dark">
      <header class ="text-center p-3 mb-2 bg-secondary text-white">
        <h1>Grocery Shopping List Generator</h1>
        <p>Plan out before you go out! Check in items after each shopping!</p>
      </header>
    
      <div class="container-md p-3 mb-2 bg-light text-dark">
      <MenuPlanForm />
      </div>
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
    </div>

  );
}

export default App;
