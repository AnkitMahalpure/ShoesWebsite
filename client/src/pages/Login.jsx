import React, { useState } from 'react'
import styled from "styled-components";
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from "react-redux";
//import { logout } from "../redux/userRedux"

const Container = styled.div`
width: 100vw;height: 100vh;background:url("https://images.pexels.com/photos/1462231/pexels-photo-1462231.jpeg?auto=compress&cs=tinysrgb&w=1600");
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
`;
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({width:"75%"})}
`;
const Title = styled.h1`
  font-size: 24px;font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: wheat;
cursor: pointer;
margin-bottom: 10px;
&:disabled{
  color: green;
  cursor: not-allowed;
}
`;
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
const Error=styled.span`
color: rebeccapurple;
`

const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch();
  const { isFetching, error} = useSelector((state) => state.user);
  
  const handleClick = (e)=>{
    e.preventDefault()
    login(dispatch,{ username, password });
  }
  // const handlelogout = (e) =>{
  //   e.preventDefault()
  //   dispatch(logout());
  // }
  return (
    <Container>
      <Wrapper>
        <Title>SIGNIN</Title>
        <Form>
          <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
          {error && <Error>Something Went Wrong ...</Error>}
          <Link>Forgot Password</Link>
          <Link>Create a new account</Link>
          {/* <Button onClick={handlelogout}>Logout</Button> */}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login

