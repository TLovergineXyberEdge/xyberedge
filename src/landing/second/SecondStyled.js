import styled from "styled-components";

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;

const TextSecondContainer = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 600px;
  position: absolute;
  right: 0;
  top: 50px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const TitleSecondText = styled.p`
  font-weight: 400;
  font-size: 33px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const TextSecond = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export { SecondContainer, TextSecond, TextSecondContainer, TitleSecondText };
