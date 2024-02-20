import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ThanksWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ThankYouHeader = styled.h3`
  font-family: Niconne;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: 0em;
  margin-top: 101px;
`;

export const SupportHeader = styled.h4`
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.01em;
  margin-bottom: 62px;
`;

export const GetResultsButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.01em;
  margin-bottom: 30px;
  background-color: transparent;
`;

export const RetakeQuizNavLink = styled(NavLink)`
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.41;
  letter-spacing: -0.01em;
  background-color: var(--button-color);
  padding: 16px 0px;
  border-radius: 100px;
  text-decoration: none;
  color: var(--answer-color);
  width: 335px;
`;
