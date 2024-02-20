import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  AgreeMessage,
  EmailFormWrapper,
  EmailHeader,
  EmailHeaderSupportText,
  EmailInput,
  EmailWrapper,
  ErrorMessage,
  SubmitButton,
} from "./Email.styled";

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizResults = JSON.parse(localStorage.getItem("quizData")) || [];
    const newData = { ...quizResults, email };
    localStorage.setItem("quizData", JSON.stringify(newData));

    setRedirecting(true);
    setTimeout(() => {
      navigate("/thanks");
      setRedirecting(false);
    }, 1000);

    setEmail("");
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value.trim();
    setEmail(e.target.value);

    if (inputValue.length === 0) {
      setError("Field is required");
    } else if (inputValue.length > 32) {
      setError("Email cannot be longer than 32 characters");
    } else if (!/^[\p{L}0-9-.]+$/u.test(inputValue)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <EmailWrapper>
      <EmailFormWrapper>
        <div>
          <EmailHeader>{t("Email")}</EmailHeader>
          <EmailHeaderSupportText>
            {t("Enter your email to get full access")}
          </EmailHeaderSupportText>
        </div>
        <form action="">
          <EmailInput
            type="text"
            placeholder={t("Your email")}
            value={email}
            onChange={handleEmailChange}
            disabled={redirecting}
            $error={error}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
        <AgreeMessage>
          {t("By continuing I agree with Privacy policy and Terms of use")}
        </AgreeMessage>
      </EmailFormWrapper>
      <SubmitButton
        type="submit"
        disabled={redirecting || error || !email}
        onClick={handleSubmit}
      >
        {t("Next")}
      </SubmitButton>
    </EmailWrapper>
  );
};

export default Email;
