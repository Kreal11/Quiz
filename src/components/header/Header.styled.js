import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const ProgressBarDiv = styled.div`
  width: calc(${(props) => props.$progress}% - 20%);
  height: 5px;
  background-color: pink;
  transition: width 1s ease-in-out;
`;
