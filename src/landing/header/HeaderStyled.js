import styled from "styled-components";
const HeaderStyle = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  position: relative;
  height: 55px;
  max-width: 100%;
  background-color: #190d3b;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const TitleHeader = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: #ffffff;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

export { HeaderStyle, TitleHeader, MenuContainer };
