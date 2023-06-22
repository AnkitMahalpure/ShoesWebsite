import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Room from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Container=styled.div`
display: flex;
@media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo=styled.h1`
margin: 10px;
`;
const Desc=styled.p`
margin: 20px 0px;
`;
const SocialContainer=styled.div`
display: flex;
`;
const SocialIcon=styled.div`
height: 40px;
width: 50px;
border-radius:50%;
color: aliceblue;
background-color: ${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`;
const Center=styled.div`
flex: 1;
padding: 20px;
`;

const Title=styled.h3`
margin-bottom: 30px;
`;

const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right=styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment=styled.img`
width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ABC</Logo>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, unde. Suscipit repellat tempora recusandae nam repudiandae eos quidem optio fuga nesciunt eaque! Maxime iure beatae distinctio vel, laudantium quas odio!</Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <FacebookIcon/>
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="#E44000">
            <YouTubeIcon/>
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <TwitterIcon/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>asd</ListItem>
          <ListItem>fgh</ListItem>
          <ListItem>jkl</ListItem>
          <ListItem>qwe</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, a?
        </ContactItem>
        <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>
          +91 9511972196
        </ContactItem>
        <ContactItem><EmailIcon style={{marginRight:"10px"}}/>
          abc@xyz.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer

