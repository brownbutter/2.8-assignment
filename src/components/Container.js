import React from "react";
import Card from "./Card";

const Container = (props) => {
    const catalog = props.catalog;
    return(
        <>
            <h1>Catalog Page</h1>
            <ul>
                <li>Fruits</li>
                <li>Vegetables</li>
                <li>Meats</li>
                <li>Others</li>
            </ul>
            {catalog.map((item) => {
                return <Card item={item} key={item.id}/>
            })}
        </>
    )
}

export default Container;