import styled from "styled-components";

export const QuestionsHeader = styled.div`
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
    justify-content: center;
    align-items: center;
    gap: 14px;
    max-height: 144px;
  `}

  ${({ $age, $book }) =>
    ($age || $book) &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    margin-bottom: 24px;
  `}
`;

export const QuestionsButton = styled.button`
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.41;
  letter-spacing: -0.01em;
  background-color: var(--button-color);
  width: 100%;
  transition: opacity 0.5s ease-in;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  border-radius: 100px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
