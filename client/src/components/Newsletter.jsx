import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';
const Container=styled.div`
height: 40vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title=styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Desc=styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
width: 80%;
${mobile({textAlign:"centre"})}
`;
const InputContainer=styled.div`
width: 40%;
height: 40px;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
${mobile({width:"80%"})}
`;
const Input=styled.input`
border: none;
flex: 8;
padding: 20px;
`;
const Button=styled.button`
flex: 1;
border: none;
`;
const Newsletter = () => {
  return (
    <div>
      <Container>
        <Title>
            Newsletter
        </Title>
        <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime, impedit dolorum sequi placeat suscipit.
        </Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
      </Container>
    </div>
  )
}

export default Newsletter
