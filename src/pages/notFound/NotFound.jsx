import { useNavigate } from "react-router-dom";
import { NotFoundWrapper } from "./NotFound.styled";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/questions/1");
  };

  return (
    <NotFoundWrapper>
      <h2>It seems like there is nothing interesting here...</h2>
      <button onClick={handleBack}>Back</button>
    </NotFoundWrapper>
  );
};

export default NotFound;
