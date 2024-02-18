import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FinalLoader, OuterCircle } from "./Loader.styled";
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
    <>
      <OuterCircle $progress={progress}>
        <FinalLoader>
          <p>{progress}%</p>
        </FinalLoader>
      </OuterCircle>
      <p>{t("Preparing results for you")}</p>
    </>
  );
};

export default Loader;
