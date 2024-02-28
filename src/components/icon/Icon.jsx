// import sprite from "../../assets/sprite/sprite.svg";
import iconBack from "../../assets/svg/icon-back.svg";
// import iconChecked from "../../assets/svg/icon-checked.svg";
import PropTypes from "prop-types";

const Icon = ({ id }) => {
  return (
    <svg>
      <use xlinkHref={`${iconBack}#${id}`} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
};
