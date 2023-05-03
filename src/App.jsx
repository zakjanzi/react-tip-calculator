import React, { useState, useRef } from 'react';
import InputField from './components/inputField'
import CustomButton from './components/customButton'
import './App.css'

// icons 



function App() {
  const [bill, setBill] = useState();
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numPeople, setNumPeople] = useState();
  const [activeTip, setActiveTip] = useState(null);
  const customTipInputRef = useRef(null);

  // to handle the value change of 'bill'
  const handleBillChange = (event) => {
    setBill(parseFloat(event.target.value));
  };

  // to handle the Tip button click
  const handleTipButtonClick = (percentage) => {
    setActiveTip(activeTip === percentage ? null : percentage);
    setTipPercentage(activeTip === percentage ? '' : percentage);
  };
  
// same as above, but for the custom tip input field
  const handleCustomTipChange = (event) => {
    setTipPercentage(parseFloat(event.target.value));
  };

  // sets the number of people
  const handleNumPeopleChange = (event) => {
    setNumPeople(parseFloat(event.target.value));
  };

  // calculate the tip amount per person
  const calculateTipAmount = () => {
    if (tipPercentage && bill && numPeople) {
      return (bill * (tipPercentage / 100)) / numPeople;
    } else {
      return 0;
    }
  };
  
  
  // calculate total (bill + tips per person)
  const calculateTotalAmount = () => {
    if (tipPercentage && bill && numPeople) {
    return (bill / numPeople) + calculateTipAmount();
  } else {
    return 0;
    }
  };

  // what happens when we click the reset button
  const handleResetButtonClick = () => {
    setBill('');
    setTipPercentage(0);
    setNumPeople('');
    setActiveTip(null);
    customTipInputRef.current.defaultValue = '';
  };

  

  return (
    <>
      <h1 className='main-title'>SPLI <br /> TTER</h1>
         
      <div className='calculator-container'>

        {/* left side */}
        <div className='input-box'>
          {/* bill */}
          <div className='bill'>
            <InputField title="Bill" step="0.01" value={bill} onChange={handleBillChange} placeholder="0"/>
          </div>
          
          <div className='select-tip-section'>
            <h3 className='select-tip-title'>Select Tip %</h3>
            
            {/* tip buttons */}
            <div className='preset-tip-buttons'>
            <CustomButton className={activeTip === 5 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(5)}>5%</CustomButton>
            <CustomButton className={activeTip === 10 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(10)}>10%</CustomButton>
            <CustomButton className={activeTip === 15 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(15)}>15%</CustomButton>
            <CustomButton className={activeTip === 25 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(25)}>25%</CustomButton>
            <CustomButton className={activeTip === 50 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(50)}>50%</CustomButton>
            <InputField className='custom-tip-button' placeholder='custom' step="1" style={{width: '120px'}} onChange={handleCustomTipChange} ref={customTipInputRef}></InputField>
            </div>
            
          </div>

          {/* number of people */}
          <div className='number-of-people-section'>
            <InputField title="Number of People" type="number" step="1" value={numPeople} onChange={handleNumPeopleChange} placeholder="0" />
          </div>

        </div>

        {/* right side */}
        <div className='results-container'>
          <div className="results-sub-container">
          <div className='left-side-text'>
            <h3 className='subtitle'>Tip Amount<br /><span className='per-person-text'> / person</span></h3>
            <h3 className='subtitle'>Total<br /><span className='per-person-text'> / person</span></h3>
          </div>

          <div className='right-side-values'>
            <h3>${calculateTipAmount().toFixed(2)}</h3>
            <h3>${calculateTotalAmount().toFixed(2)}</h3>
          </div>


          </div>

          <CustomButton className="reset-button" onClick={handleResetButtonClick}>Reset</CustomButton>
        </div>
      </div>
    </>
  )
}

export default App
