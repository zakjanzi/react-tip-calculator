
export default function InputField(props) {
  const { value, onChange, placeholder, disabled, title, className, style, step } = props;

  return (
    <div className={className} style={{width: '100%', ...style}}>
      <h3 style={{ 
        fontFamily: 'Source Code Pro, monospace',
        fontSize: '12px',
        display: 'flex',
        marginRight: '10px'
      }}>
        {title}
      </h3>
      <input
        type="number"
        //to not allow users to enter negative numbers
        onKeyPress={(e) => {
          if (e.key === '-' || e.key === '+' || e.key === 'e') {
            e.preventDefault();
          }
        }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        step={step}
        pattern="[0-9]*\\.[0-9]*"
        style={{ 
          display: 'flex',
          verticalAlign: 'top',
          fontSize: '24px',
          width: '100%',
          height: '45px',
          backgroundColor: 'rgb(245, 245, 245)',
          border: 'none',
          borderRadius: '5px',
          textAlign: 'right',
          color: 'darkgreen',
          fontFamily: 'Source Code Pro, monospace',
        }}
      />
    </div>
  );
}
