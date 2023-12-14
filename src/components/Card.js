import React from "react";
import "./Card.css";

const Card = (props) => {
    const {name, price, desc} = props.item;
    return(
        <div className="card">
            <p>{name}</p>
            <p>{price}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Card;