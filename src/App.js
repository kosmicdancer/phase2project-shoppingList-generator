import './App.css';
import React from 'react';
import MenuPlanForm from './components/menuPlanForm';
import ItemsNeededListContainer from './components/itemsNeededListContainer';
import ItemsHaveListContainer from './components/itemsHaveListContainer'
import ShoppingListContainer from './components/shoppingListContainer'
import CheckInItemForm from './components/checkInItemForm';
import InventoryList from './components/inventoryList';


function App() {
  // const [menus, setMenus] = useState([]);
  // const [items, setItems] = useState({items});

  // function HandleMenuSelect () {
  //   useEffect(() => {
  //   fetch("https://phase2project-json.herokuapp.com/menus")         
  //   .then(r => r.json())         
  //   .then(data => setMenus(data.menus))},[])
  //   console.log(menus)
  //   }
  // function HandleInventoryDisplay () {
  //   useEffect (() => {
  //   fetch("https://phase2project-json.herokuapp.com/items") 
  //   .then(r => r.json())         
  //   .then(data => setItems(data.items))},[])
  //   }

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
      <div>
        <InventoryList />
      </div>
    </div>

  );
}

export default App;
