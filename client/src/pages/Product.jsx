import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux"

const Container=styled.div``;
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    height: 60vh;
    @media (max-width: 1000px) and (min-width: 700px) {
    height: 50vh;
    }
    @media (max-width: 700px) {
    flex-direction: column;
    }
`;
const ImageContainer=styled.div`
flex: 1;
/* width: 100%;
height: 90vh; */
/* display: flex;
align-items: center;
justify-content: center;
@media (max-width: 1000px) {
    height: 50vh;
    width: 100%;
    } */
`;
const Image=styled.img`
/* width: 90%;
height: 90%;
object-fit:cover;
@media (max-width: 1000px) {
    width: 300px;
    height: 300px;
    } */
max-inline-size: 100%;
block-size: auto;
`;

const InfoContainer=styled.div`
flex: 1;
width: 50%;
height: 90vh;
padding: 0px 50px;
display: flex;
/* margin-top: 100px; */
align-items: center;
justify-content: flex-start;
flex-direction: column;
@media (max-width: 1000px) {
    height: 50vh;
    width: 100%;
    padding: 0px;
    margin-top: 0px;
    }
`;
const Title=styled.h1`
font-weight: 200;
`;
const Desc=styled.p`
margin: 20px 0px;
`;
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({margin: "5px 10px",width:"100%"})}
`;
const Filter=styled.div`
display: flex;
align-items: center;
`;
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;height: 20px;border-radius:50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption=styled.option``;
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}
`;
const AmountContainer=styled.div`
display: flex;align-items: center;font-weight: 700;
`;
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;align-items: center;justify-content: center;margin: 0px 5px;
`;
const Button=styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
`;
const Product = () => {
    const location = useLocation();
    const id =location.pathname.split("/")[2];
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(1);
    const [color,setColor]=useState("");
    const [size,setSize]=useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async() =>{
            try {
                const res=await publicRequest.get("/products/find/"+id);
                console.log(res.data);
                setProduct(res.data);
            } catch (error) {
                
            }
        }
        getProduct();
    },[id]);

    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity>1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }
    }
    const handleClick =() =>{
        console.log({...product,quantity,size,color});
        dispatch(
            addProduct({...product,quantity,size,color})
        );
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img} alt="ankit" />
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>${product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((e)=>(
                            <FilterColor color={e} key={e} onClick={()=>setColor(e)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=>(
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <AddIcon onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product