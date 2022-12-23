import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Css
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
// End Css

const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: "gray", fontSize: 16 }}
            ></i>
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/' style={{textDecoration:"none", color:"black"}}>
            <Logo>SAR.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to='/cart'>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <i
                style={{ fontSize: "16px" }}
                class="fa-solid fa-cart-shopping"
              ></i>
            </Badge>
          </MenuItem>
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
