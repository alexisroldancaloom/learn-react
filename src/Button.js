import PropTypes from "prop-types";

export function Button({ text }) {
  return <button>Mi {text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};
