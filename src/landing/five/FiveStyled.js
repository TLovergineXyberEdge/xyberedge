import styled from "styled-components";

const FiveContainer = styled.div`
  height: 750px;
  width: 100%;
  position: relative;
  padding: 3rem;
`;

const FiveSecondContainer = styled.div`
  padding: 3rem;
  background: rgba(255, 255, 255, 0.82);
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 650px;
  position: absolute;
  left: 0;
  top: 50px;
`;

const TextFive = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #000000;
`;

export { FiveContainer, FiveSecondContainer, TextFive };
