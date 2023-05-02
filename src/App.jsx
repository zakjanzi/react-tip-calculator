import React, { useState } from 'react';
import InputField from './components/inputField'
import CustomButton from './components/customButton'
import './App.css'

// icons 



function App() {
  const [bill, setBill] = useState();
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numPeople, setNumPeople] = useState();
  const [activeTip, setActiveTip] = useState(null);

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
  };

  

  return (
    <>
      <h1 className='main-title'>SPLI <br /> TTER</h1>
         
      <div className='calculator-body'>
        {/* left side */}
        <div className='input-box'>
          <div className='bill'>
            <InputField title="Bill" value={bill} onChange={handleBillChange} placeholder="0"/>
            
          </div>
          <div className='tip-selection'>
            <h3 className='select-tip-title'>Select Tip %</h3>
            <div className='tip-buttons'>

            <CustomButton className={activeTip === 5 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(5)}>5%</CustomButton>
            <CustomButton className={activeTip === 10 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(10)}>10%</CustomButton>
            <CustomButton className={activeTip === 15 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(15)}>15%</CustomButton>
            <CustomButton className={activeTip === 25 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(25)}>25%</CustomButton>
            <CustomButton className={activeTip === 50 ? 'tip-button active' : 'tip-button'} onClick={() => handleTipButtonClick(50)}>50%</CustomButton>
            <InputField className='custom-tip-button' placeholder='custom' style={{width: '120px'}} onChange={handleCustomTipChange}> </InputField>

            </div>
          </div>

          <div className='number-people'>

            
            <InputField title="Number of People" type="number" min="1" value={numPeople} onChange={handleNumPeopleChange} placeholder="0" />
            
          </div>
        </div>

        {/* right side */}
        <div className='results-box'>
          <div className="text-total">
          <div className='tip-amount'>
            <h3 className='per-person'>Tip Amount<br /><span className='subtitle'> / person</span></h3>
            <h3 className='per-person'>Total<br /><span className='subtitle'> / person</span></h3>
          </div>

          <div className='result-numbers'>
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
