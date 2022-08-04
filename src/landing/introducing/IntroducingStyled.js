import styled from "styled-components";

const IntroducingContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 550px;
  width: 100%;
  background-color: #3d6dff;
  line-height: 28px;
`;

const Titleintroducing = styled.p`
  font-size: 39px;
  color: white;
  font-weight: 400;
`;

const ButtonExpert = styled.button`
  width: 220px;
  height: 41px;
  color: #b721ff;
  margin-top: 1rem;
  background-color: white;
  border: 3px solid #b721ff;
  font-weight: 700;
  font-size: 24px;
  border-radius: 90px;
`;

const ListaPuntanta = styled.p`
  color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

const ImgComputer = styled.img`
  position: absolute;
  right: 10rem;
  top: 7rem;
`;

export {
  IntroducingContainer,
  Titleintroducing,
  ButtonExpert,
  ListaPuntanta,
  ImgComputer,
};
