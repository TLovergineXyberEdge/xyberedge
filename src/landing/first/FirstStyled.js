import styled from "styled-components";

const ContainerFirst = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  height: 640px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TitleFirst = styled.p`
  font-size: 45px;
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const ContentText = styled.div`
  font-size: 22px;
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
