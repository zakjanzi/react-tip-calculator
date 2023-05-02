import InputField from './components/inputField'
import './App.css'

// icons 


import CustomButton from './components/customButton'

function App() {
  return (
    <>
      <h1 className='main-title'>SPLI <br /> TTER</h1>
         
      <div className='calc-body'>
        {/* left side */}
        <div className='input-box'>
          <div className='bill'>
            <InputField title='Bill' />
            
          </div>
          <div className='tip-selection'>
            <h3 className='select-tip-title'>Select Tip %</h3>
            <div className='tip-buttons'>

            <CustomButton className='tip-button'>5%</CustomButton>
            <CustomButton className='tip-button'>10%</CustomButton>
            <CustomButton className='tip-button'>15%</CustomButton>
            <CustomButton className='tip-button'>25%</CustomButton>
            <CustomButton className='tip-button'>50%</CustomButton>
            <CustomButton className='tip-button'>Custom</CustomButton>

            </div>
          </div>

          <div className='number-people'>

            
            <InputField title='Number of People' />
            
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
            <h3>$0.00</h3>
            <h3>$0.00</h3>
          </div>


          </div>

          <CustomButton className='reset-button'>Reset</CustomButton>
        </div>
      </div>
    </>
  )
}

export default App
