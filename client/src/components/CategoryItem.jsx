import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';
const Container=styled.div`
flex: 1;
margin: 3px;
height: 60vh;
min-width: 350px;
position: relative;
`;
const Image=styled.img`
width: 100%;
height: 100%;
object-fit:cover;
${mobile({height: "30vh"})}
`;
const Info=styled.div`
position: absolute;
height: 100%;width: 100%;
top: 0px;
left: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title=styled.h1`
color: white;
margin-bottom:20px;
`;
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`;
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
          <Image src={item.img}/>
          <Info>
              <Title>{item.title}</Title>
              <Button>Shop Now</Button>
          </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
