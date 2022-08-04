import React from "react";
import {
  ButtonExpert,
  IntroducingContainer,
  ListaPuntanta,
  Titleintroducing,
  ImgComputer,
} from "./IntroducingStyled";
import Computer from "../../media/computer.png";
import { calendyFunction } from "../../shared/calendy";

const Introducing = () => {
  return (
    <IntroducingContainer>
      <Titleintroducing>
        Introducing XyberEdge proprietary solution
      </Titleintroducing>
      <ListaPuntanta>• whatever is needed</ListaPuntanta>
      <ListaPuntanta>• whenever is needed </ListaPuntanta>
      <ListaPuntanta>• with 0% financial risk from Cyberattacks</ListaPuntanta>
      <ListaPuntanta>• at less than you can expect</ListaPuntanta>
      <ButtonExpert onClick={() => calendyFunction()}>
        Talk to an Expert
      </ButtonExpert>
      <ImgComputer src={Computer} alt="computer" />
    </IntroducingContainer>
  );
};

export default Introducing;
