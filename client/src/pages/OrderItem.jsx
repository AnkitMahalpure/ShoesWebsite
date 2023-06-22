import React from 'react'
import styled from "styled-components";

const Container = styled.div`
`;
const Wrapper = styled.div`
padding: 50px;
border: 2px solid;
display: flex;
`;
const OrderInfo = styled.div`
flex: 1;
`;
const OrderProducts = styled.div`
flex: 2;
`;
const IndividualItem = styled.div`
display: flex;
`
const OrderProductsInfo = styled.div`
flex: 1;
height: 200px;
`
const OrderProductsImage = styled.div`
flex: 1;
`
const Image=styled.img`
height: 180px;
`
const Items = styled.h2`
`;
const OrderItem = ({ order }) => {
  return (
    <Container>
      <Wrapper>
        <OrderInfo>
          <Items>Order ID : {order.orderId}</Items>
          <Items>Payment ID : {order.paymentId}</Items>
          <Items>Order Status : {order.status}</Items>
          <Items>Order Amount : {order.amount}</Items>
        </OrderInfo>
        <OrderProducts >
          {
            order.products.map(product =>
              <IndividualItem>
                <OrderProductsInfo>
                  <h3>Product ID - {product._id}</h3>
                  <h3>Product Title - {product.title}</h3>
                  <h3>Size - {product.size}</h3>
                  <h3>Color - {product.color}</h3>
                  <h3>Price - {product.price}</h3>
                  <h3>Quantity - {product.quantity}</h3>
                </OrderProductsInfo>
                <OrderProductsImage>
                  <Image src={product.img} />
                </OrderProductsImage>
              </IndividualItem>
            )
          }
          {/* <OrderProductsInfo>
            {
              order.products.map(product =>
                <Individual key={product._id}>
                  <h4>{product._id}</h4>
                  <h4>{product.title}</h4>
                  <h4>{product.size}</h4>
                  <h4>{product.color}</h4>
                  <h4>{product.price}</h4>
                  <h4>{product.quantity}</h4>
                </Individual>
              )
            }
          </OrderProductsInfo>
          <OrderProductsImage>
          {
            order.products.map(product => 
              <Individual key={product._id}>
                <Image src={product.img}/>
              </Individual>
            )
          }
          </OrderProductsImage> */}
        </OrderProducts>
      </Wrapper>
    </Container>
  )
}

export default OrderItem
