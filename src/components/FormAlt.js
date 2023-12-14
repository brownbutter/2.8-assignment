import {Component} from "react";

class FormAlt extends Component{
    constructor(){
        super();

        this.state = {
            name : "",
            price : 0,
            desc : ""
        }

        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event){
        event.preventDefault();
        this.setState({
            name : event.target.value
        })
    }
    
    handlePrice(event){
        event.preventDefault();
        this.setState({
            price : event.target.value
        })
    }

    handleDesc(event){
        event.preventDefault();
        this.setState({
            desc : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <>
                <h2>Item Creation Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Item name:</label>
                    <input type="text" name="name" placeholder="Enter item name:" onChange={this.handleName}/>
                    <br/>
                    <label htmlFor="price">Item name:</label>
                    <input type="number" name="price" placeholder="Enter item price:" onChange={this.handlePrice}/>
                    <br/>
                    <label htmlFor="description">Item name:</label>
                    <input type="text" name="description" placeholder="Enter item description:" onChange={this.handleDesc}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default FormAlt;