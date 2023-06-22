import React from 'react'
import styled from "styled-components"
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch} from "react-redux";
import { logout } from "../redux/userRedux"

const Container = styled.div`
  height: 50px;
  @media (max-width: 600px) {
    height: 100px;
  }
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language=styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer=styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input=styled.input`
  border: none;
`
const Centre = styled.div`
  text-align: center;
  flex: 1;
`
const Logo=styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const name=useSelector(state=>state.user.currentUser)
  console.log(name);
  const dispatch=useDispatch();
  const handlelogout = () =>{
    dispatch(logout());
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Centre><Logo>ABC</Logo></Centre>
        <Right>
          <MenuItem>{name == null ? "" : name.username}</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem><Link to="/login">SignIn</Link></MenuItem>
          <MenuItem><Link to="/orders">Orders</Link></MenuItem>
          <Button onClick={handlelogout}>Logout</Button>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
