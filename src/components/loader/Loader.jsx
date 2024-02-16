import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FinalLoader, OuterCircle } from "./Loader.styled";

const Loader = () => {
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
    <OuterCircle $progress={progress}>
      <FinalLoader>
        <p>{progress}%</p>
      </FinalLoader>
    </OuterCircle>
  );
};

export default Loader;
