import React from "react";
import {
  BoxText,
  ContainerFirst,
  TitleFirst,
  ContentText,
  ButtonSeeHow,
} from "./FirstStyled";
import { useMediaQuery } from "react-responsive";

import { calendyFunction } from "../../shared/calendy";
import Logo from "../../media/logo.png";

const First = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <ContainerFirst>
      <BoxText>
        <TitleFirst>
          Leave your IT <br /> worries behind
        </TitleFirst>
        <ContentText>
          Introducing the XyberEdge proprietary solution,
          <br /> providing you with
          <br />
          <br /> whatever is needed and whenever is needed <br />
          <br />
          with 0% financial risk from Cyberattacks at less
          <br /> that you can expect
        </ContentText>
      </BoxText>
      <img
        src={Logo}
        style={{
          marginTop: isMobile ? "" : "-6rem",
          maxHeight: isMobile ? "300px" : "800px",
        }}
        alt="logo"
      />
      <ButtonSeeHow onClick={() => calendyFunction()}>See how</ButtonSeeHow>
    </ContainerFirst>
  );
};

export default First;
