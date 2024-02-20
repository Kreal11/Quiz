import styled from "styled-components";

export const EmailWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const EmailFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 72px;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const EmailHeader = styled.h3`
  font-family: Albert Sans;
  font-size: 30px;
  font-weight: 800;
  line-height: 1.27;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
`;

export const EmailHeaderSupportText = styled.p`
  font-family: Albert Sans;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.47;
  letter-spacing: 0em;
  color: var(--support-color);
`;

export const EmailInput = styled.input`
  padding: 26px 20px;
  width: 100%;
  background-color: var(--answer-bg-color);
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.41;
  letter-spacing: -0.01em;
  border-radius: 16px;
  border: 2px solid transparent;
  transition: border 0.3s ease-in;

  &:focus {
    ${({ $error }) => $error && `border: 2px solid var(--invalid-color);`}
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  font-family: Albert Sans;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.41;
  letter-spacing: -0.01em;
  background-color: var(--button-color);
  width: 100%;
  transition: opacity 0.5s ease-in;
  color: var(--answer-color);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  border-radius: 100px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: var(--invalid-color);
  position: absolute;
  top: 85px;
  left: 24px;
`;

export const AgreeMessage = styled.p`
  font-family: Albert Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
`;
