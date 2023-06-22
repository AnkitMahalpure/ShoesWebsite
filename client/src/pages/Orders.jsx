import React, { useEffect, useState } from 'react'
import { userRequest } from "../requestMethod";
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
const Heading = styled.h1`
font-size: 40px;
`

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const id = useSelector(state => state.user.currentUser._id)
  const username= useSelector(state => state.user.currentUser.username)
  console.log(username);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + id);
        console.log(res.data);
        setOrders(res.data);
      } catch (error) {

      }
    }
    getOrders();
  }, [id]);
  //console.log(order[0].userId);
  return (
    <div>
      <Navbar/>
      <Heading>Hi {username} Your Orders ....</Heading>
      {
        orders.map(order =>
          <OrderItem order={order} key={order._id} />
        )
      }
    </div>
  )
}

export default Orders
