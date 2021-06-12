import React from 'react';
import './App.css';
import MenuPlanForm from './components/menuPlanForm';
import ItemsNeededListContainer from './components/itemsNeededListContainer';
import ItemsHaveListContainer from './components/itemsHaveListContainer'
import ShoppingListContainer from './components/shoppingListContainer'
import CheckInItemForm from './components/checkInItemForm';



function App() {
  return (
    <div>
      <header className="text-center">
        <h1>Grocery Shopping List Generator</h1>
        <p>Plan out before you go out! Check in items after each shopping!</p>
      </header>
    
      <div>
      <MenuPlanForm />
      </div>
      <div>
      <ItemsNeededListContainer />
      </div>
      <div>
      <ItemsHaveListContainer />
      <ShoppingListContainer />
      </div>
      <div>
      <CheckInItemForm />
      </div>
    </div>

  );
}

export default App;
