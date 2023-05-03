
import PropTypes from 'prop-types';

export default function CustomButton(props) {
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
