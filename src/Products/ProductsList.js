import React, { Component } from 'react'
import SingleProduct from './SingleProduct'
import { Grid } from '@material-ui/core';
import Cart from './Cart';
import styled from "styled-components";
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

    add = (id)=>{
        const list = [...this.state.products]
        let index = list.findIndex((product)=>{
            return product.id===id;
        } )
        list[index].quantity = list[index].quantity+1;
        this.setState({
            products : list
        })
    }

    sub = (id)=>{ 
        const list = [...this.state.products]
        let index = list.findIndex((product)=>{
            return product.id===id;
        } )
        if(list[index].quantity!==0){
            list[index].quantity = list[index].quantity-1;
            this.setState({
                products : list
            })
        }
    }

    remove = (id)=>{
        const list = [...this.state.products]
        let index = list.findIndex((l)=>{
            return l.id === id;
        })
        list[index].quantity=0;
        this.setState({
            products : list
        })
    }
    render() {
        const List = this.state.products.map((product)=>{
            return  <SingleProduct name={product.name} price={product.price} info={product.info} quantity={product.quantity} img={product.img} add={this.add} sub={this.sub} id={product.id} key={product.id}/>
        })

        const StyledDiv =styled.div`
            border : 2px solid pink;
            margin : 2px;
        `;

        const cartList = this.state.products.filter( (product)=>{
            return product.quantity!==0
        })

        const CardProductList = cartList.map((product)=>{
            return <Cart name={product.name} price={product.price} quantity={product.quantity} remove={this.remove} key={product.id} id={product.id}/>
        } )

        let TotalCost = 0;
        for(var i=0;i<cartList.length;i++){
            TotalCost+=cartList[i].price * cartList[i].quantity; 
        }
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <StyledDiv>
                            <h1>Products List</h1>
                            {List}
                        </StyledDiv>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h1>Cart</h1>
                        {CardProductList}
                        <p>Total Cost is : {TotalCost}</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProductsList
