import React from "react";
import {
  BoxText,
  ContainerFirst,
  TitleFirst,
  ContentText,
  ButtonSeeHow,
} from "./FirstStyled";

import { calendyFunction } from "../../shared/calendy";
import Logo from "../../media/logo.png";

const First = () => {
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
        height={"800px!important"}
        style={{ marginTop: "-6rem" }}
        alt="logo"
      />
      <ButtonSeeHow onClick={() => calendyFunction()}>See how</ButtonSeeHow>
    </ContainerFirst>
  );
};

export default First;
