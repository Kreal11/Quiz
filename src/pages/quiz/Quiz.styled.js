import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LanguageQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    color: var(--support-color);
    font-size: 17px;
    line-height: 1.41;
    letter-spacing: 0em;
    margin: 0 auto;
    margin-bottom: 24px;
  }
`;

export const LanguageQuestionHeader = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: -0.01em;
  max-width: 280px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const LangNavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const LanguageNavLink = styled(NavLink)`
  color: var(--answer-color);
  background-color: var(--answer-bg-color);
  max-width: 347px;
  text-align: left;
  border-radius: 16px;
  font-family: "Nunito Sans";
  font-size: 17px;
  font-weight: 600;
  line-height: 1.41;
  letter-spacing: 0em;
  padding: 18px 20px;
  text-decoration: none;
`;

export const QuizWrapper = styled.div`
  position: relative;
`;

export const SvgBackArrow = styled.svg`
  position: absolute;
  width: 13px;
  height: 13px;
  top: -80px;
  left: 0;
`;
