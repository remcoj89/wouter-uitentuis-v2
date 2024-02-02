import './button.styles.scss';
import { useContext } from 'react';
import {appScrollContext} from '../../context/scroll-context/scroll.context';
import PropTypes from 'prop-types';

const BUTTON_TYPE_CLASSES = {
  heroButton: 'hero-button',
  submitButton: "submit-button"
};

const Button = ({children, buttonType, location }) => {
  const { handleScroll } = useContext(appScrollContext);

  const handleButtonClick = () => {
    handleScroll(location);
  };

  return(<button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} onClick={handleButtonClick}>{children}</button>
  )
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  buttonType: PropTypes.oneOf(Object.keys(BUTTON_TYPE_CLASSES)).isRequired,
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Button
