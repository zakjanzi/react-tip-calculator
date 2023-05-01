import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, onClick, disabled } = props;

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 'calc(100% - 80px)',
        height: '40px',
        bottom: '30px',
        left: '40px',
        backgroundColor: '#1cdbc2',
        borderRadius: '5px',
        border: 'none',
        textTransform: 'uppercase',
      }}>
      {children}
    </button>
    
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
