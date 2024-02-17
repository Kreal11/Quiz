import styled, { keyframes } from "styled-components";

export const FinalLoader = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  background-color: grey;
  position: absolute;
  left: 6px;
  top: 6px;
`;

export const OuterCircle = styled.div`
  position: relative;
  width: 252px;
  height: 252px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #e4229c;

  background: conic-gradient(
    #e4229c ${(props) => props.$progress}%,
    transparent 0
  );
`;
