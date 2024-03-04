import PropTypes from "prop-types";

const AButton = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

AButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default AButton;
