import { useState } from 'react';

function DateCounter() {

const date = new Date()

function getDayName(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

const getDate = date.getDate()
const getDay = getDayName(date)
const getMonth = date.getMonth()
const getYear = date.getFullYear()



const[stepCount, setstepCount]=useState(1)
const[count, setCount]=useState(0)

const[dayCount, setDayCount]=useState(getDate)

function handleIncrement(){
const stepIncrement = stepCount + 1
setstepCount(stepIncrement);

}

function handleDecrement() {
    const stepDecrement = stepCount - 1;
    setstepCount(stepDecrement);
  }



  function handleCountIncrement(){
console.log(stepCount)

    const countIncrement = count + stepCount;
    const dayCountIncrenet = dayCount + dayCount

    setCount(countIncrement);
    setDayCount(dayCountIncrenet)
  }

  function handleCountDecrement(){

    const countIncrement = count - stepCount

    setCount(countIncrement)
  
  }

  function handleDay(){ 

"sss"




  }



return (
  <>
    <h1>Date Counter {dayCount }{typeof(dayCount)}</h1>

    <div style={{ textAlign: "center" }}>
      <button onClick={handleDecrement}>-</button> Step {stepCount}{" "}
      <button onClick={handleIncrement}>+</button>
    </div>



    <div style={{ textAlign: "center" }}>
      <button onClick={handleCountDecrement}>-</button> Step {count}
      <button onClick={handleCountIncrement}>+</button>
    </div>


<div style={{"margin-top":"25px"}}>


<div style={{ textAlign: "center" }}>today is {`${getDate} ${getDay}  ${getMonth}  ${getYear}`}</div></div>


<div style={{"marginTop":"50px"}}>

<div style={{ textAlign: "center" }}> {handleDay}sss</div>
</div>

  </>
);

   
}

export default DateCounter;