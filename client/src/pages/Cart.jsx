import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { removeProduct } from '../redux/cartRedux'
import axios from "axios";
import {logo} from "../data"
import { userRequest } from '../requestMethod'
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;align-items: center;justify-content: space-between;
padding: 20px;
`;
const TopBottom = styled.button`
padding: 10px;font-weight: 600;cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
cursor: pointer;
text-decoration:underline;
margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
width: 200px;
flex: 1;
`;
const Details = styled.div`
flex: 1;
padding: 20px;display: flex;flex-direction:column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
width: 20px;height: 20px;border-radius:50%;
background-color: ${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "25px" })}
`;
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === 'total' && "500"};
font-size: ${props => props.type === 'total' && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`;

const Cart = () => {
  //const [paymentData,setPaymentData]=useState();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user.currentUser)
  //const amount=useSelector(state => state.cart.)
  const dispatch=useDispatch();
  console.log(cart);
  const navigate = useNavigate();
  
  const remove = ({product}) =>{
    console.log(product);
    dispatch(removeProduct({product}));
  }
  
  const editOrder = async (data) =>{
    const a=data.razorpay_order_id;
    const link="/orders/"+a;
    //const filter={orderId:data.razorpay_order_id}
    const update={paymentId:data.razorpay_payment_id}
    try {
    const res= await userRequest.put(link,update);
      console.log(res);
      navigate("/success", {
        state : {data :res.data}
        });
    } catch (error) {
      console.log(error);
    }
  }

  const initPayment = (data) => {
		const options = {
			key: "rzp_test_ziWUL234rRPZlN",
			amount: data.amount,
			currency: data.currency,
			name: "Shoes_Web",
			description: "Test Transaction",
			image: logo.img,
			order_id: data.id,
			handler: async (response) => {
				try {
          console.log(response);
          editOrder(response);
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log
          (error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

  const addOrder = async(data) =>{
    try {
      const res= await userRequest.post("/orders",data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:5000/api/payment/orders";
			const { data } = await axios.post(orderUrl, {products:cart,user:user});
			console.log(data);
      addOrder(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopBottom>Continue Shopping</TopBottom>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopBottom type="filled">Cheakout Now</TopBottom>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} alt='ankit' />
                  <Details>
                    <ProductName><b>Product:</b>{product.title}</ProductName>
                    <ProductID> <b>ID:</b>{product._id}</ProductID>
                    <ProductColor color={product.color} />
                    <ProductSize> <b>Size:</b>{product.size}</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveIcon />
                    <DeleteIcon onClick={(product)=>remove(product)}/>
                  </ProductAmountContainer>
                  <ProductPrice>{product.price * product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>))
            }
            <Hr/>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton onClick={handlePayment}>Cheakout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
