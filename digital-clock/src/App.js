import './App.css';
import Horloge from './function_components/Horloge.js';
import BtnTimer from './function_components/BtnTimer';
import Timer from './function_components/Timer';
import Count_Down from './function_components/CountDown';
import BtnCountDown from './function_components/BtnCountDown';
import { useState } from 'react';

function App(){

/*Below is the functionement of the timer and his mecanics*/

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv]= useState();
  const [status, setStatus]= useState(0);
  var updatedMs= time.ms, updatedS= time.s, updatedM= time.m, updatedH= time.h;
  //Not started = 0;
  //started = 1;
  //pause = 2

/*Below is the functionement of the Count-down */
/*
  const hour= document.getElementById("hour_values");
  const minutes= document.getElementById("minutes_values");
  const second= document.getElementById("second_values");
  
  const [reverse, setReverse]= useState({H: hour.value, M: minutes.value, S: second.value});
  var reverseH= reverse.H, reverseM= reverse.M, reverseS= reverse.S;

  /*Mecanic of Count-down*/

 /* const CountDown= () => {
    if(reverseM == 0){
      reverseH--;
      reverseM= 60
    }
    if(reverseS == 0){
      reverseM--;
      reverseS=60
    }
    reverseS--;
    return setReverse({H:reverseH, M:reverseM, S:reverseS});
  }

const inverse = () => {
  CountDown();
  setInterv(setInterval(CountDown, 1000));
}

/*Mecanic of timer*/

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  }

  const run= () => {
    if(updatedM === 60){
      updatedH++;
      updatedM=0
    }
    if(updatedS === 60){
      updatedM++;
      updatedS=0
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs=0
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

/* Mecannic Function*/

  const stop = () => {
    clearInterval(interv);
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  }

  const resume = () => start();

/*
    Below is the components who will return by this function
*/

  return(
    <div className='container'>
      <div>
        <Horloge></Horloge>
      </div>
        <div>
          <div>
            <div><h1>Timer</h1></div>
            <div className='container-timer'>
              <Timer time={time}></Timer>
              <BtnTimer status={status} resume={resume} reset={reset} stop={stop} start={start}></BtnTimer>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

