import styled from "styled-components";

const ContainerThird = styled.div`
  width: 100%;
  height: 900px;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    height: 1700px;
  }
`;

const MiniTextThird = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const SecondTextThird = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 39px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const TitleThird = styled.p`
  font-weight: 400;
  font-size: 48px;
  line-height: 30px;

  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 35px;
  }
`;

const SpanWhite = styled.span`
  font-weight: "bold";
`;
const TextParagrafo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  text-align: right;

  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export {
  ContainerThird,
  TextParagrafo,
  TitleThird,
  MiniTextThird,
  SecondTextThird,
  SpanWhite,
};
