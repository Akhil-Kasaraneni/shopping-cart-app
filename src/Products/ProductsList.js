import React, { Component } from 'react'
import SingleProduct from './SingleProduct'

export class ProductsList extends Component {

    state = {
        products : [
            {
                name : "Battery",
                id:"1",
                img : "https://images-na.ssl-images-amazon.com/images/I/61gLEz0aatL._SL1500_.jpg",
                price : 90,
                quantity: 0,
                info : "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
            },
            {
                name : "Bike",
                id:"2",
                img : "https://images-na.ssl-images-amazon.com/images/I/71hn7-p46%2BL._SL1500_.jpg",
                price : 9090,
                quantity: 0,
                info : " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like"
            },
            {
                name : "Car",
                id:"3",
                img : "https://images-na.ssl-images-amazon.com/images/I/81X97aDLzAL._SL1500_.jpg",
                price : 1390,
                quantity: 0,
                info : "ere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise"
            },
            {
                name : "Water",
                id:"4",
                img : "https://aquafina.com/images/fbshare.png",
                price : 980,
                quantity: 0,
                info : "oing through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofThe Extremes of Good and Evil "
            },
            {
                name : "Bat",
                id:"5",
                img : "https://images-na.ssl-images-amazon.com/images/I/51DHp5b2F3L._SL1300_.jpg",
                price : 900,
                quantity: 0,
                info : "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is"
            }
        ]
    }
    render() {
        const List = this.state.products.map((product)=>{
            return  <SingleProduct name={product.name} price={product.price} info={product.info} quantity={product.quantity} img={product.img} />
        })
        return (
            <div>
                {List}
            </div>
        )
    }
}

export default ProductsList
