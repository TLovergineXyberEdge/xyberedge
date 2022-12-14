import styled from "styled-components";

const ContainerFooter = styled.div`
  height: 400px;
  padding: 5rem;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const BoxRight = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 5rem;
  font-size: "12px";
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContainerFirstPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextFooter = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
export {
  ContainerFooter,
  ContainerFirstPart,
  FirstBlock,
  SectionBlock,
  SectionSocial,
  TextFooter,
  BoxRight,
};
