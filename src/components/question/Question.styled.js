import styled from "styled-components";

export const OtherQuestionsHeader = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: -0.01em;
  max-width: 280px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const QuestionSupportHeader = styled.h4`
  color: var(--support-color);
  font-size: 17px;
  line-height: 1.41;
  letter-spacing: 0em;
  margin: 0 auto;
  margin-bottom: 44px;
`;

export const AnswersList = styled.ul`
  ${({ $emoji }) =>
    $emoji &&
    `
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    max-height: 144px;
  `}

  ${({ $age }) =>
    $age &&
    `
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  `}
`;
