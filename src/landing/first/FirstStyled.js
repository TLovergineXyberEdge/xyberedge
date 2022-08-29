import styled from "styled-components";

const ContainerFirst = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  height: 640px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TitleFirst = styled.p`
  font-size: 45px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    height: auto;
  }
`;

const ContentText = styled.div`
  font-size: 22px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
  }
`;

const ButtonSeeHow = styled.button`
  border: none;
  background-color: #3d68ff;
  border-radius: 90px;
  width: 130px;
  height: 32px;
  color: white;
  font-weight: 400;
  font-size: 24px;
  position: absolute;
  bottom: 3rem;
`;
export { ContainerFirst, TitleFirst, BoxText, ContentText, ButtonSeeHow };
