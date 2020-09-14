import React from 'react';
import './App.css';

const ConfirmPage = (props) => { 
    return (
        <div className = "order_card">
            <h2> Congrats your Pizza is on it's Way</h2>
            {props.orderConfirm.map(item => {
               return <div >
                   <h3>{item.name} your Pizza is <span>{item.size}</span>  size with {item.sauce}</h3>
                   <ul>
                       <li>{item.topping}</li>
                       <li>{item.topping}</li>
                   </ul>
                </div>
            })}
        </div>
    );
};

export default ConfirmPage;