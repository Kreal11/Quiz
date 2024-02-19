import styled from "styled-components";

export const AnswersWrapper = styled.div`
  ${({ $emoji }) =>
    $emoji &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    padding: 28px 24px;
    background-color: var(--answer-bg-color)
  `}

  ${({ $emoji }) =>
    !$emoji &&
    `
    text-align: left;
    border-radius: 16px;
    padding: 26px 20px;
    background-color: var(--answer-bg-color);
    font-family: Albert Sans;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41px;
    letter-spacing: -0.01em;
  `}
`;
