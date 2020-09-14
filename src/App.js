import React, { useState } from "react";
import ReactDom from 'react-dom';
import Form from './Form';
import './App.css';

const App = () => {

  const [formSt, setFormst] = useState();

  return (
    <div className = "App">
      <h1>Lambda Eats</h1>
      {/* <p>You can remove this code and create your own header</p> */}
      <Form />
    </div>
  );

};

export default App;
