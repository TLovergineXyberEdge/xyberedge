import React from "react";
import {
  ContainerThird,
  MiniTextThird,
  SecondTextThird,
  TextParagrafo,
  TitleThird,
} from "./ThirdStyled";
import blob from "../../media/blobscene.png";
import Yes from "../../media/YES.png";
const Third = () => {
  return (
    <ContainerThird
      style={{
        backgroundImage: `url(${blob})`,
        backgroundSize: "cover",
        color: "white",
        marginTop: "-1rem",
      }}
    >
      <MiniTextThird>I SHOULD PROTECT MYSELF?</MiniTextThird>
      <SecondTextThird>
        If you are thinking, should I protect myself and my company?{" "}
      </SecondTextThird>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TitleThird>The answer is a resounding</TitleThird>
        <img src={Yes} alt="yes" style={{ position: "center" }} />
      </div>
      <TitleThird>WHAT ARE THE CHANCES TO BE ATTACKED?</TitleThird>
      <TextParagrafo>
        When it comes to avoiding cyberattacks, bigger is better. At least
        that’s according to a new report that shows{" "}
        <span style={{ fontWeight: "700" }}>
          small and medium businesses are three times more likely to be targeted
          by cybercriminals{" "}
        </span>
        than larger companies.
        <br />
        <br />{" "}
        <span style={{ fontWeight: "700" }}>
          66% of SMBs had at least one cyber incident in the past two years
        </span>
        , according to Mastercard.
        <br />
        Cybercrimes are vastly undercounted because they aren’t reported — due
        to embarrassment, fear of reputational
        <br />
        harm, and the notion that law enforcement can’t help (amongst other
        reasons).
        <br /> The unit chief at the FBI’s Internet Crime Complaint Center (IC3)
        stated that the number of reported cybercrimes in the
        <br />
        agency’s reports{" "}
        <span style={{ fontWeight: "700" }}>
          only represents 10 to 12 percent of the total number committed in the
          U.S. each year.
        </span>
        <br />
        <br />
        In other words, the question is not IF my company will suffer a
        cyberattack but WHEN it will happen.
      </TextParagrafo>
    </ContainerThird>
  );
};

export default Third;
