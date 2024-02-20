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
    background-color: var(--answer-bg-color);
    cursor: pointer;
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
    cursor: pointer;
  `}
`;

export const Label = styled.label`
  cursor: pointer;
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
  background-color: ${({ selected }) =>
    selected ? "var(--checked-answer-color)" : "var(--answer-bg-color)"};
  border: ${({ selected }) =>
    selected ? "2px solid var(--accent-color)" : "2px solid transparent"};
  position: relative;

  transition: background-color 0.5s ease-in, border 0.5s ease-in;

  ${({ $bubble }) =>
    $bubble &&
    `
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    padding: 18px 8px 23px 8px;
    background-color: var(--answer-bg-color);
    font-family: Nunito Sans;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.23;
    letter-spacing: 0.006em;
    text-align: center;
    width: 72px;
    height: 47px;
  `}
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

  ${({ $bubble }) =>
    $bubble &&
    `
     appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
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
