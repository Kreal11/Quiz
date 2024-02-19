import styled from "styled-components";

export const HeaderWrapper = styled.div`
  font-family: Albert Sans;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.11;
  letter-spacing: 0em;
  margin-bottom: 45px;

  p {
    margin-bottom: 13px;
  }

  span {
    color: var(--accent-color);
  }
`;

export const ProgressBarDiv = styled.div`
  width: calc(${(props) => props.$progress}% - 20%);
  height: 5px;
  border-radius: 100px;
  background-color: var(--accent-color);
  transition: width 1s ease-in-out;
`;
