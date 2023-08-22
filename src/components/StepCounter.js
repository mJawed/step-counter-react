import { useState } from "react";

function StepCounter() {


  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const[step, setStep]=useState(1)


  function handleNext(){


if(step < 3){
  setStep(step + 1)
}

    
  }


  function handlePrevious(){
  if(step > 1){
    setStep(step - 1)
  }
  }

  return (
    <>
<div className="steps">
<div className="numbers">
        <div className={`step-1 ${step >= 1 ? 'active':"" }`}>1</div>
        <div className={`step-2 ${step >= 2 ? 'active':"" }`}>2</div>
        <div className={`step-1 ${step >= 3 ? 'active':"" }`}>3</div>
      </div>
      <p className="message">
        {messages[step - 1]}
      </p>

      <div className="buttons">
        <button className={`previous ${step > 1 ? 'active':"" }`} onClick={handlePrevious}>Previous</button>
        <button className={`next ${step >= 3 ? '':"active" }`} onClick={handleNext} >Next</button>
      </div>
</div>
    </>
  );
}

export default StepCounter;