import styled from "styled-components";

export const FinalLoader = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Albert Sans;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  background-color: var(--main-bg-color);
  position: absolute;
  left: 9px;
  top: 9px;
`;

export const OuterCircle = styled.div`
  position: relative;
  width: 258px;
  height: 258px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: var(--accent-color);
  background: conic-gradient(
    var(--accent-color) ${(props) => props.$progress}%,
    var(--loader-outline-color) 0
  );
  margin-bottom: 40px;
`;

export const LoaderWrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PreparingText = styled.p`
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.01em;
  max-width: 213px;
`;
