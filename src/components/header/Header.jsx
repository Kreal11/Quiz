import { useParams } from "react-router-dom";
import { ProgressBarDiv } from "./Header.styled";

const Header = () => {
  const { id } = useParams();

  const progress = (parseInt(id) / 5) * 100 + 10;

  return (
    <div>
      <p>{id}/5</p>
      <ProgressBarDiv $progress={progress} />
    </div>
  );
};

export default Header;
