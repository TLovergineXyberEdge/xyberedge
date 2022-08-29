import styled from "styled-components";

const FiveContainer = styled.div`
  height: 750px;
  width: 100%;
  position: relative;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    height: 1200px;
  }
`;

const FiveSecondContainer = styled.div`
  padding: 3rem;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 650px;
  position: absolute;
  left: 0;
  top: 50px;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
`;

const TextFive = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  color: #000000;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    align-items: center;
  }
`;

export { FiveContainer, FiveSecondContainer, TextFive };
