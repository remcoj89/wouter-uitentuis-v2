/* eslint-disable no-undef */
import './cart-component.styles.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import IconShovel from '../../assets/icons/icon-shovel';

const CartComponent = ({ cart }) => {
  const { iconPath, title, paragraph1, paragraph2 } = cart;

  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    return setReadMore(!readMore);
  };

  return (
    <div className={`card ${readMore ? 'open' : ''}`}>
      <IconShovel />
      <h2 className='card-title'>{title}</h2>
      <p>{paragraph1}</p>
      {readMore && <p className='paragraph-2'>{paragraph2}</p>}
      <span className='read-more-btn' onClick={toggleReadMore}>{readMore ? 'Lees minder' : 'Lees meer...'}</span>
    </div>
  );
};

CartComponent.propTypes = {
  cart: PropTypes.shape({
    iconPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string,
  }).isRequired,
};

export default CartComponent;
