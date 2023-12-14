import {React, useState, useEffect} from "react";

const Form = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [item, setItem] = useState({});

    const handleName = (event) => {
        setName(event.target.value);
        console.log("Item name: " + event.target.value);
    }
    const handlePrice = (event) => {
        setPrice(event.target.value);
        console.log("Item price: " + event.target.value);
    }
    const handleDesc = (event) => {
        setDesc(event.target.value);
        console.log("Item description: " + event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, price, desc);
        let newItem = {
            name: name,
            price: price,
            desc: desc
        }
        setItem(newItem);
    }

    return(
        <>
            <h2>Item Creation Form</h2>
            <form>
                <label htmlFor="name">Item name:</label>
                <input type="text" name="name" placeholder="Enter item name:" onChange={handleName}/>
                <br/>
                <label htmlFor="price">Item name:</label>
                <input type="number" name="price" placeholder="Enter item price:" onChange={handlePrice}/>
                <br/>
                <label htmlFor="description">Item name:</label>
                <input type="text" name="description" placeholder="Enter item description:" onChange={handleDesc}/>
                <br/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <h3>Item to add:</h3>
            <p>Name: {item.name}</p>
        </>
    )
}

export default Form;