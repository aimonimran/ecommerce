import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  background-color: #${(props) => props.bg};
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})};
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AIMON.</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
          recusandae impedit incidunt ullam nobis suscipit necessitatibus dicta?
          Sint saepe commodi perferendis tempore illum, dolore maxime, eius
          mollitia, amet aut dolorum!
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem><LocationOnOutlinedIcon style={{marginRight: "5"}} />Karachi, Pakistan</ContactItem>
        <ContactItem><PhoneOutlinedIcon style={{marginRight: "5"}} />+92 309 0078601</ContactItem>
        <ContactItem><EmailOutlinedIcon style={{marginRight: "5"}} />aimon@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
