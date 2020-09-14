import React from 'react';
import Pizza from './Pizza.jpg'

const FormImage = (props) => {
    return (
        <div>
            {/* <h2>Form Image Component</h2>   */}
            <img className ="pizza_image" src = {Pizza} alt = "Pizza"/>
        </div>
       
    );
};

export default FormImage;