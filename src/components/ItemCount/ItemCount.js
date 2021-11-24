import React, { Component } from "react"
import ItemCard from "../ItemCard/ItemCard"
import './ItemCount.css'
import './bootstrap.css'

class ItemCount extends Component {
    constructor() {
		super();
		this.count = 0;
	}

    add = () => {
		this.setState({ count: this.count + 1 });
	};

	decrease = () => {
		this.setState({ count: this.count - 1 });
	};

    render() {
        return(
            <div className='container CounterContainer'>
                <p>Counter: {this.count}</p>
                <div className='d-grid gap-2 d-md-block'>
                    <button className='btn btn-primary' onClick={this.decrease}>Restar</button>
                    <button className='btn btn-primary' onClick={this.add}>Agregar</button>
                </div>
            </div>
        )
    }
}

export default ItemCount