import React, { useState } from 'react';
import FormImage from './FormImage';
import './App.css';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string()
});

const Form = (props) => {

    const [formstate, setFormstate] = useState({
        name: "",
        size: "",
        sauce: "",
        topping: "",
        substitute: "",
        splinstruction: "",
    });

    const changeHandler = (e) => {
        console.log(e.target.value, e.target.checked);
        e.persist();
        let anyVariable = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormstate({ ...formstate, [e.target.name]: anyVariable });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        props.order(formstate);
        setFormstate({ name: "", size: "", sauce: "", topping: "", substitute: "", splinstruction: "" });
        console.log("Order Confirmed");
        axios.post(`https://reqres.in/api/users`, formstate)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className = "formdiv">
            <form onSubmit = {formSubmit}>
                <FormImage />
                <h2>Build Your Own Pizza</h2>
                <p><label htmlFor="name">Customer Name: 
                    <input type="text" name="name" value={formstate.name} onChange={changeHandler}/> 
                </label></p>

                <div className = "titleclass">
                    <h3>Choice of Size</h3>
                    <p>required:</p>
                </div>

                <label htmlFor = "size"></label>
                <p><select name="sizeofpizza" value={formstate.size} onChange={changeHandler} id = "sizeofpizza">
                    <option value="">--Select size of Pizza--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>                   
                </select></p>

                <div className="titleclass">
                    <h3>Choice of Sauce</h3>
                    <p>required:</p>
                </div>
                <div>
                    <p><input type="radio" name="originalred" checked={formstate.sauce} onChange = {changeHandler} /> Original Red</p>
                    <p><input type="radio" name="garlicranch" checked={formstate.sauce} onChange = {changeHandler}/> Garlic Ranch</p>
                    <p><input type="radio" name="bbqsauce" checked={formstate.sauce} onChange = {changeHandler}/> BBQ Sauce</p>
                    <p><input type="radio" name="spinachalfredo" checked={formstate.sauce} onChange = {changeHandler}/> Spinach Alfredo</p>
                </div>
                <div className="titleclass">
                    <h3>Add Toppings</h3>
                    <p>Choice up to 10..</p>
                </div>
                <div>
                    <p><lable htmlFor = "pepperoni">  <input type = "checkbox" name ="pepperoni" checked = {formstate.topping} onChange = {changeHandler} value = "pepperoni"/> Pepperoni
                        </lable></p>
                    <p><lable htmlFor = "sausage">  <input type = "checkbox" name ="sausage" checked = {formstate.topping} onChange = {changeHandler} value = "sausage"/> Sausage
                        </lable></p>
                    <p><lable htmlFor = "canadianbacon">  <input type = "checkbox" name ="canadianbacon" checked = {formstate.topping} onChange = {changeHandler} value = "canadianbacon"  /> Canadian Bacon
                        </lable></p>
                    <p><lable htmlFor = "italiansausage">  <input type = "checkbox" name ="italiansausage" checked = {formstate.topping} onChange = {changeHandler} value ="italiansausage"/> Spicy Italian Sausage
                        </lable></p>
                    <p><lable htmlFor = "grilledchicken">  <input type = "checkbox" name ="grilledchicken" checked = {formstate.topping} onChange = {changeHandler} value = "grilledchicken"/> Gilled Chicken
                        </lable></p>  
                    <p><lable htmlFor = "onions">  <input type = "checkbox" name ="onions" checked = {formstate.topping} onChange = {changeHandler} value = "onions" /> Onions
                        </lable></p>
                    <p><lable htmlFor = "greenpepper">  <input type = "checkbox" name ="greenpepper" checked = {formstate.topping} onChange = {changeHandler} value ="greenpepper"/> Green Pepper
                        </lable></p>
                    <p><lable htmlFor = "dicedtomatoes">  <input type = "checkbox" name ="dicedtomatoes" checked = {formstate.topping} onChange = {changeHandler} value = "dicedtomatoes" /> Diced Tomatoes
                        </lable></p>
                    <p><lable htmlFor = "blackolives">  <input type = "checkbox" name ="blackolives" checked = {formstate.topping} onChange = {changeHandler} value ="blackolives"/> Black Olives
                        </lable></p>
                    <p><lable htmlFor = "roastedgarlic">  <input type = "checkbox" name ="roastedgarlic" checked = {formstate.topping} onChange = {changeHandler} value = "roastedgarlic"/> Roasted Garlic
                        </lable></p>
                    <p><lable htmlFor = "artichoke">  <input type = "checkbox" name ="artichoke" checked = {formstate.topping} onChange = {changeHandler} value ="artichoke"/> Artichoke Hearts
                        </lable></p>
                    <p><lable htmlFor = "threecheese">  <input type = "checkbox" name ="threecheese" checked = {formstate.topping} onChange = {changeHandler} value ="threecheese"/> Three Cheese
                        </lable></p>
                    <p><lable htmlFor = "pineapple">  <input type = "checkbox" name ="pineapple" checked = {formstate.topping} onChange = {changeHandler} value ="pineapple"/> Pineapple
                        </lable></p>
                    <p><lable htmlFor = "extracheese">  <input type = "checkbox" name ="extracheese" checked = {formstate.topping} onChange = {changeHandler} value = "extracheese"/> Extra Cheese
                        </lable></p>
                </div>
                <div className="titleclass">
                    <h3>Choice of Substitute</h3>
                </div>
                <p><lable htmlFor = "glutenfree">  <input type = "checkbox" name ="glutenfree" checked = {formstate.substitute} onChange = {changeHandler} value = "glutenfree"/> Gluten free crust ($1.00)
                    </lable></p>
                <div className="titleclass">
                    <h3>Special Instruction</h3>
                </div>
                <p><textarea type = "textarea" name = "splinstruction" className="textareastyle" value = {formstate.splinstruction} onChange = {changeHandler}/></p>
                <p><button> Order</button></p>
            </form>
        </div>
    );
};

export default Form;