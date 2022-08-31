import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/icons-material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import {mobile} from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})};
`;
const Wrapper = styled.div`
  padding: 0 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "0"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({flex: 1})};
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})};
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "3px"})};
`;
const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})};
`;

const Center = styled.div` 
  flex: 1;
  text-align: center;
  ${mobile({flex: 1})};
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})};
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex: 3, justifyContent: "center", padding: "0"})};
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "14px", marginLeft: "25px"})};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color: "grey", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>AIMON.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <ShoppingCartOutlined color="primary"/>
            {/* <Badge badgecontent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
