import React, { Component } from 'react'

class Cart extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p> Cost is {this.props.quantity} X {this.props.price} = {this.props.quantity*this.props.price}</p>
                <button onClick={()=>{this.props.remove(this.props.id)}}>Remove</button>
            </div>
        )
    }
}

export default Cart
