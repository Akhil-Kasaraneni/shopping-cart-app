import React from "react";
import { Grid } from '@material-ui/core';
import styled from "styled-components";
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover{
      color:palevioletred;
  }
`;

const StyledImage=styled.img`
  border-radius : 50%;
  width : 200px;
  height : 200px
`;

const style = {
    margin : "30px"
}
const SingleProduct =(props)=>{
    return(
        <div style={style}>   
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <StyledImage src={props.img} alt="img prop"/>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <h1>{props.name}</h1>
                    <p> {props.info}</p>
                    <p> price is : {props.price}</p>
                    <StyledButton>-</StyledButton>
                    <span>Quantity is {props.quantity} </span>
                    <StyledButton>+</StyledButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default SingleProduct;