import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction ==="left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide=styled.div`
display: flex;
flex-wrap: nowrap;
align-items: center;
background-color: yellow;
width: 100vw;
height: 100vh;
justify-content: center;
background-color: #${props=>props.bg};
@media (max-width: 900px) {
    flex-direction: column;
}
`;
const ImageContainer=styled.div`
flex: 40%;
height: 100%;
width: 50%;
`;

const Image=styled.img`
height: 80%;
width: 80%;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
margin-bottom: auto;
@media (max-width: 450px) {
    height: 70%;
    width: 70%;
}
`
const InfoContainer=styled.div`
flex:60%;
padding: 50px;
width: 50%;
`
const Title=styled.h1`
font-size: 70px;
@media (max-width: 900px) {
    font-size:50px;
}
@media (max-width: 450px) {
    font-size:30px;
}
`
const Desc=styled.p`
font-size: 20px;
margin: 50px 0px;
font-weight: 500;
letter-spacing: 3px;
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 : 0)
        }
    };
  return (
    <Container >
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftIcon/>
      </Arrow>
      <Wrapper slideIndex={slideIndex} >
        {
            sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id} className="row">
                    <ImageContainer className='col-6'>
                        <Image alt='anlit' src={item.img}/>
                    </ImageContainer>
                    <InfoContainer className='col-6'>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            ))
        }
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider
