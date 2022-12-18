import React from "react";
import styled from "styled-components";


// Css
const Container = styled.div`
  height: 60px;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

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
  outline:none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;
// End Css

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <i class="fa-solid fa-magnifying-glass" style={{ color: "gray", fontSize: 16 }} ></i>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>SAR.</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <i class="fa-solid fa-bag-shopping" badgeContent={4} color="primary">
         
          </i> <i class="fa-solid fa-cart-shopping"></i>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
  );
};

export default Navbar;
