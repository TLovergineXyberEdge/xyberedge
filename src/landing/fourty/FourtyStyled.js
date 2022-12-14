import styled from "styled-components";

const FourtyContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const MiniTextFourty = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextFourty = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 44px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export { FourtyContainer, MiniTextFourty, TextFourty };
