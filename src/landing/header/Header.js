import React from "react";
import { HeaderStyle, MenuContainer, TitleHeader } from "./HeaderStyled";
import title from "../../media/title.png";
const Header = () => {
  return (
    <HeaderStyle>
      <MenuContainer style={{ display: "none" }}>
        <TitleHeader>Solutions</TitleHeader>
        <TitleHeader>Customers</TitleHeader>
        <TitleHeader>Company</TitleHeader>
      </MenuContainer>
      <img
        src={title}
        alt="title"
        //style={{ position: "absolute", left: "40%", top: "0.5rem" }}
      />
      <MenuContainer style={{ display: "none" }}>
        <TitleHeader>Contact Us</TitleHeader>
        <TitleHeader>EN</TitleHeader>
      </MenuContainer>
    </HeaderStyle>
  );
};

export default Header;
