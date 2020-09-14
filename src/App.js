import React, { useState } from "react";
import ReactDom from 'react-dom';
import Form from './Form';
import './App.css';
import HomePage from './HomePage';

import ConfirmPage from './ConfirmPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {

  const [pizzaorder, setPizzaorder] = useState([
    {
    id: Date().now,
    name: "Sathya",
    size: "Large",
    sauce: "",
    topping: "",
    substitute: "",
    splinstruction: "",
    }
  ]);

  const addNewOrder = (formData) => {
    const newOrder = {
      // id: Date().now,
      name: formData.name,
      size: formData.size,
      sauce: formData.sauce,
      topping: formData.topping,
      substitute: formData.substitute,
      splinstruction: formData.splinstruction,
    }
    setPizzaorder([...pizzaorder, newOrder]);
  };

  return (
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className ="nav_links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Pizza</Link>
          <Link to="/confirmation">Orders</Link>
        </div>
      </nav>
      
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/pizza" >
        {/* <FormImage /> */}
        <Form order={addNewOrder}/>
      </Route>
      <Route path="/confirmation">
        <ConfirmPage orderConfirm = {pizzaorder}/>
      </Route>
    </div>
  );

};

export default App;
