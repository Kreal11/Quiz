import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  EmailFormWrapper,
  EmailHeader,
  EmailHeaderSupportText,
  EmailInput,
  EmailWrapper,
  SubmitButton,
} from "./Email.styled";

const Email = () => {
  const [email, setEmail] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
          />
        </form>
        <p>{t("By continuing I agree with Privacy policy and Terms of use")}</p>
      </EmailFormWrapper>
      <SubmitButton type="submit" disabled={redirecting} onClick={handleSubmit}>
        {t("Next")}
      </SubmitButton>
    </EmailWrapper>
  );
};

export default Email;
