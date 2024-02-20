import { useParams } from "react-router-dom";
import { HeaderWrapper, ProgressBarDiv } from "./Header.styled";

const Header = () => {
  const { id } = useParams();

  const currentPage = parseInt(id);
  const progress = (currentPage / 5) * 100 + 10;

  return (
    <HeaderWrapper>
      <p>
        <span>{id}</span> / 5
      </p>
      <ProgressBarDiv $progress={progress} />
    </HeaderWrapper>
  );
};

export default Header;
