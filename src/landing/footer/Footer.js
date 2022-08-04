import React from "react";
import {
  BoxRight,
  ContainerFirstPart,
  ContainerFooter,
  FirstBlock,
  SectionBlock,
  SectionSocial,
  TextFooter,
} from "./FooterStyled";
import instagram from "../../media/instagram.png";
import youtube from "../../media/youtube.png";
import linkedin from "../../media/linkedin.png";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerFirstPart>
        <FirstBlock>
          <SectionBlock>
            <TextFooter>Glossary</TextFooter>
            <TextFooter>XyberEdge Experience Centers</TextFooter>
            <TextFooter>Subscribe to newsletters</TextFooter>
          </SectionBlock>
          <SectionBlock>
            <TextFooter>Investor Relations</TextFooter>
            <TextFooter>Careers</TextFooter>
          </SectionBlock>
        </FirstBlock>
        <SectionSocial>
          <TextFooter>FOLLOW XyberEdge</TextFooter>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
            <img
              src={instagram}
              style={{ width: "41px", height: "41px" }}
              alt="instagram"
            />
            <img
              src={linkedin}
              style={{ width: "41px", height: "41px" }}
              alt="linkedin"
            />
            <img
              src={youtube}
              style={{ width: "41px", height: "41px" }}
              alt="youtube"
            />
          </div>
        </SectionSocial>
      </ContainerFirstPart>

      <div
        style={{
          borderBottom: "1px solid black",
          width: "100%",
          marginTop: "9rem",
        }}
      />
      <BoxRight style={{}}>
        Privacy and legal terms | Cookie preferences | Site map
      </BoxRight>
    </ContainerFooter>
  );
};

export default Footer;
