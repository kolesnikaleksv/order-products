import PropTypes from 'prop-types';

import './addButton.scss';

const AddButton = ({size}) => {
  return (
    <button
      type="button"
      className={['add-button', `add-button--${size}`].join(' ')}>
    </button>
  )
}

AddButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
};

AddButton.defaultProps = {
  size: 'normal',
};

export default AddButton;