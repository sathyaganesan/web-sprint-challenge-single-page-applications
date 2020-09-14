import React, { useState } from "react";
import ReactDom from 'react-dom';
import Form from './Form';
import './App.css';
import HomePage from './HomePage';
import FormImage from './FormImage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

  const [formSt, setFormst] = useState();

  return (
    <div className = "App">
      <h1>Lambda Eats</h1>
      <Route exact path="/" component={HomePage}>
      </Route>
      <Route path="/form" >
        <FormImage />
        <Form />
      </Route>
    </div>
  );

};

export default App;
