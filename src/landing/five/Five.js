import React from "react";
import { FiveContainer, FiveSecondContainer, TextFive } from "./FiveStyled";
import code from "../../media/code.jpg";
const Five = () => {
  return (
    <FiveContainer
      style={{ backgroundImage: `url(${code})`, backgroundSize: "cover" }}
    >
      <FiveSecondContainer>
        <TextFive>
          • Cybercrime is a very big problem for everybody and the cyber menace
          is growing. <br />
          • Every business will be attacked in the future. <br />
          • Every attack will cost the business big money, threatening its
          existence.
          <br /> • To protect themselves, businesses need more than an
          antivirus.
          <br /> • To set up a bare minimum protection team a valuable amount of
          money is needed.
          <br />
          <br />
          <br />
          <span style={{ fontWeight: "700" }}>
            There is a better way, the best way to prevent cyberattack
            consequences, 100% protection, AND 0% financial risk.
          </span>
          <br />
          <br /> Imagine having found something that protects you and your
          company from Cyber attacks’ financial fallout.
          <br /> Imagine not having to expand your IT team if any, for
          addressing cyber threats.
          <br /> You will not care about cybersecurity anymore, there is someone
          else that takes care of it for you.
          <br /> Even in the event of a cyber attack that would cost other
          companies millions, you will not lose money. <br />
          Your company will survive. <br />
          Imagine having all this peace of mind so you can focus on your
          business and your company's growth.
        </TextFive>
      </FiveSecondContainer>
    </FiveContainer>
  );
};

export default Five;
