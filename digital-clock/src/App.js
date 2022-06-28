import './App.css';
import BtnTimer from './function_components/BtnTimer';
import Timer from './function_components/Timer';
import Mode from './function_components/Mode';
import ButtonHorloge from './function_components/ButtonHorloge.js';
import ButtonCount from './function_components/ButtonCount';
import { useState } from 'react';

function App(){

/*Below is the functionement of the timer and his mecanics*/

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv]= useState();
  const [status, setStatus]= useState(0);
  const [mode, setMode]= useState(0);
  var updatedMs= time.ms, updatedS= time.s, updatedM= time.m, updatedH= time.h;
  //Not started = 0;
  //started = 1;
  //pause = 2

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

  /*Below is the switch functionement*/

  const Switch = () => {
    setMode(1);
  }
  const Stay = () => {
    setMode(0);
  }

/*
    Below is the components who will return by this function
*/

  return(
    <div className='container'>
      <div>
        <Mode mode={mode}></Mode>
        <ButtonHorloge mode={mode} switch={Switch} stay={Stay}></ButtonHorloge>
        <ButtonCount mode={mode} switch={Switch} stay={Stay}></ButtonCount>
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

