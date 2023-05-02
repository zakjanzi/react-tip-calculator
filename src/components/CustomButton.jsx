
import PropTypes from 'prop-types';

function CustomButton(props) {
  const { children, onClick, disabled, className } = props;

  return (
    <button 
      className={className}
      onClick={onClick} 
      disabled={disabled}>
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default CustomButton;
