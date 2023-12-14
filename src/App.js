import './App.css';
import Container from "./components/Container";
import Form from "./components/Form";
import Cart from "./components/Cart";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  const catalog = [
    {
        id : 1,
        name : "Apple",
        price : 1.99,
        desc : "A big juicy apple",
        isAvailable : true,
        category : "fruit"
    },
    {
        id : 2,
        name : "Chicken",
        price : 26.75,
        desc : "Chicken Filet",
        isAvailable : true,
        category : "meat"
    },
    {
        id : 3,
        name : "Biscuits",
        price : 12.99,
        desc : "A tin of grandma biscuits",
        isAvailable : false,
        category : "others"
    },
    {
        id : 4,
        name : "Cauliflower",
        price : 6.15,
        desc : "A head of crunchy cauliflower",
        isAvailable : true,
        category : "vegetable"
    }
  ];

  return (
    <>
    <BrowserRouter>
      <h1>Navigation</h1>
      <ul>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/create-item">Create Item</Link></li>
      </ul>
      <Switch>
        <Route path="/catalog">
          <Container catalog={catalog}/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/create-item">
          <Form/>
        </Route>
      </Switch>
    </BrowserRouter> 
    </>
  );
}

export default App;
