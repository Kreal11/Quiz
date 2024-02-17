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

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 10px 5px pink; 
    transform: rotate(
      ${(props) => props.$progress * 3.6}deg
    ); 
    box-sizing: border-box;
  } */
`;
