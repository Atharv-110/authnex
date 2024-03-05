import PropTypes from "prop-types";

const AButton = (props) => {
  const { text, onClick, variant } = props;
  switch (variant) {
    case "filled":
      return (
        <button
          onClick={onClick}
          className="bg-[#674EB1] text-white px-6 py-2 rounded-lg w-full"
        >
          {text}
        </button>
      );
    case "bordered":
      return (
        <button
          onClick={onClick}
          className="w-full border-2 border-[#674EB1] px-4 md:px-6 py-2 rounded-lg font-medium text-sm  md:text-base"
        >
          {text}
        </button>
      );

    default:
      return null;
  }
};

AButton.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["bordered", "filled"]).isRequired,
  onClick: PropTypes.func,
};

export default AButton;
