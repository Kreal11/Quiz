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
    max-width: 53px;
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

export const Label = styled.label`
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  padding: 21px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background-color: var(--answer-bg-color);
  position: relative;
`;

export const CheckboxInput = styled.input`
  ${({ $multiple }) =>
    $multiple &&
    `
   appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 23px;
  height: 23px;
  background-color: var(--checkbox-bg-color);
  border: 1px solid red;
  margin-right: 8px;
  border-radius: 8px;
  transition: background-color 1.3s;


  &::before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    vertical-align: middle;
    margin-right: 6px;
    border-radius: 8px;
    opacity: 1;
    transition: opacity 1s transform 1s;
  }

  &:checked::before {
    border-radius: 8px;
    margin-right: 6px;
    opacity: 1;
    width: 23px;
    height: 23px;
    background-color: var(--accent-color);
    transform: translate(-0.5px, -0.5px);;
  }

  &:checked + svg {
    opacity: 1;
    transition: opacity 1.3s;
    }
  `}
`;

export const SvgChecked = styled.svg`
  opacity: 0;
  position: absolute;
  top: 32px;
  right: 33px;
  width: 12px;
  height: 9px;
`;
