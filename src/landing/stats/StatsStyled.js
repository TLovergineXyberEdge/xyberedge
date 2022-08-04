import styled from "styled-components";

const ContainerStats = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  height: 400px;
  background-color: #01b3f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContainerSingleStat = styled.div`
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
  max-width: 321px;
`;

const TitleStats = styled.p`
  font-weight: 400;
  color: white;
  font-size: 80px;
`;

const TextStats = styled.p`
  margin-top: -3rem;
  color: white;
  font-weight: 400;
  font-size: 24px;
`;

export { ContainerStats, ContainerSingleStat, TextStats, TitleStats };
