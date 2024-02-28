import sprite from "../../assets/sprite/sprite.svg";
import PropTypes from "prop-types";

const Icon = ({ id }) => {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
};
