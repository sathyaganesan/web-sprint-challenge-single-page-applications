import React from 'react';
import './App.css';

const Form = (props) => {
    return (
        <div className = "formdiv">
            <form>
                <h2>Build Your Own Pizza</h2>
                <p><label htmlFor="name">Customer Name: 
                    <input type = "text" name = "name" /> 
                </label></p>
                <div className = "titleclass">
                    <h3>Choice of Size</h3>
                    <p>required:</p>
                </div>
                <select>
                    <option value="">--Select size of Pizza--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>                   
                </select>
                <div className="titleclass">
                    <h3>Choice of Sauce</h3>
                    <p>required:</p>
                </div>
                <p><input type="radio" name="originalred" value="originalred" /> Original Red</p>
                <p><input type="radio" name="garlicranch" value="garlicranch" /> Garlic Ranch</p>
                <p><input type="radio" name="bbqsauce" value="bbqsauce" /> BBQ Sauce</p>
                <p><input type="radio" name="spinachalfredo" value="spinachalfredo" /> Spinach Alfredo</p>
                <div className="titleclass">
                    <h3>Add Toppings</h3>
                    <p>Choice up to 10..</p>
                </div>
                <div>
                    <p><lable htmlFor = "pepperoni">  <input type = "checkbox" name ="pepperoni" value = "pepperoni" /> Pepperoni
                        </lable></p>
                    <p><lable htmlFor = "sausage">  <input type = "checkbox" name ="sausage" value = "sausage" /> Sausage
                        </lable></p>
                    <p><lable htmlFor = "canadianbacon">  <input type = "checkbox" name ="canadianbacon" value = "canadianbacon" /> Canadian Bacon
                        </lable></p>
                    <p><lable htmlFor = "italiansausage">  <input type = "checkbox" name ="italiansausage" value = "italiansausage" /> Spicy Italian Sausage
                        </lable></p>
                    <p><lable htmlFor = "grilledchicken">  <input type = "checkbox" name ="grilledchicken" value = "grilledchicken" /> Gilled Chicken
                        </lable></p>  
                    <p><lable htmlFor = "onions">  <input type = "checkbox" name ="onions" value = "onions" /> Onions
                        </lable></p>
                    <p><lable htmlFor = "greenpepper">  <input type = "checkbox" name ="greenpepper" value = "greenpepper" /> Green Pepper
                        </lable></p>
                    <p><lable htmlFor = "dicedtomatoes">  <input type = "checkbox" name ="dicedtomatoes" value = "dicedtomatoes" /> Diced Tomatoes
                        </lable></p>
                    <p><lable htmlFor = "blackolives">  <input type = "checkbox" name ="blackolives" value = "blackolives" /> Black Olives
                        </lable></p>
                    <p><lable htmlFor = "roastedgarlic">  <input type = "checkbox" name ="roastedgarlic" value = "roastedgarlic" /> Roasted Garlic
                        </lable></p>
                    <p><lable htmlFor = "artichoke">  <input type = "checkbox" name ="artichoke" value = "artichoke" /> Artichoke Hearts
                        </lable></p>
                    <p><lable htmlFor = "threecheese">  <input type = "checkbox" name ="threecheese" value = "threecheese" /> Three Cheese
                        </lable></p>
                    <p><lable htmlFor = "pineapple">  <input type = "checkbox" name ="pineapple" value = "pineapple" /> Pineapple
                        </lable></p>
                    <p><lable htmlFor = "extracheese">  <input type = "checkbox" name ="extracheese" value = "extracheese" /> Extra Cheese
                        </lable></p>
                </div>
                <div className="titleclass">
                    <h3>Choice of Substitute</h3>
                </div>
                <p><lable htmlFor = "glutenfree">  <input type = "checkbox" name ="glutenfree" value = "glutenfree" /> Gluten free crust ($1.00)
                    </lable></p>
                <div className="titleclass">
                    <h3>Special Instruction</h3>
                </div>
                <p><textarea className = "textareastyle"></textarea></p>
            </form>
        </div>
    );
};

export default Form;