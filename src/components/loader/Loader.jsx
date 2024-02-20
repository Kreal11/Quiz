import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FinalLoader,
  LoaderWrapper,
  OuterCircle,
  PreparingText,
} from "./Loader.styled";
import { useTranslation } from "react-i18next";

const Loader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearTimeout(timerId);
          navigate("/email");
        }
        return newProgress;
      });
    }, 50);

    return () => clearTimeout(timerId);
  }, [navigate, progress]);

  return (
    <LoaderWrapper>
      <OuterCircle $progress={progress}>
        <FinalLoader>
          <p>{progress}%</p>
        </FinalLoader>
      </OuterCircle>
      <PreparingText>{t("Finding collections for you...")}</PreparingText>
    </LoaderWrapper>
  );
};

export default Loader;
