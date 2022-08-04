import React from "react";
import {
  SecondContainer,
  TextSecond,
  TextSecondContainer,
  TitleSecondText,
} from "./SecondStyled";

import Pc from "../../media/pc.jpg";

const Second = () => {
  return (
    <SecondContainer
      style={{ backgroundImage: `url(${Pc})`, backgroundSize: "100%" }}
    >
      <TextSecondContainer>
        <TitleSecondText>
          Cybercrime: The Greatest Threat to
          <br /> Business Today
        </TitleSecondText>
        <TextSecond>
          Twenty years ago, cyber security was a mere footnote during IT
          meetings and has been a balancing act between productivity and
          protection for most companies. <br />
          <br />
          Fast forward to 2022 and that luxury of limited attack vectors has
          withered away. Every company is at risk, also yours.
          <br />
          <br /> In fact, IBM’s chairman, president, and CEO Ginni Rometty has
          stated, “Cybercrime is the greatest threat to every company in the
          world.” <br />
          <br />
          Billionaire businessman Warren Buffet took it a step further and said
          cyberattacks are the number one problem with mankind, even worse than
          nuclear weapons.
        </TextSecond>
      </TextSecondContainer>
    </SecondContainer>
  );
};

export default Second;
