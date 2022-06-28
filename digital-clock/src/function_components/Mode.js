import React from 'react';
import BtnTimer from './BtnTimer';
import { useEffect, useState } from 'react';

const Mode = (props) => {

    const [date, setDate] = useState(new Date());
    let timer;

    useEffect(() => {
        timer = setInterval(() => {
            setDate(new Date());
    },1000);

    return () => {
        clearInterval(timer);
    };
});

/*here is the functionement of the count down*/
  const [time, setTime] = useState({h:0, m:0, s:0});
  const [interv, setInterv]= useState();
  const [status, setStatus]= useState(0);
  var updatedS= time.s, updatedM= time.m, updatedH= time.h;

const start = () => {
    run();
    setInterv(setInterval(run, 1000));
    setStatus(1);
  }

  const run= () => {
    if(updatedM == 1){
      updatedH--;
      updatedM=60
    }
    if(updatedS == 1){
     updatedM--;
     updatedS=60
    }
    updatedS--;
    return setTime({h:updatedH, m:updatedM, s:updatedS});
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({h:0, m:0, s:0});
  }

  const resume = () => start();

    return (
        <div>
            {(props.mode === 0) ?
                <>
                <div>
                    <h1>Horloge</h1>
                        <div className="clock-container">
                            <p className="clock">
                            <span>{date.getHours().toString().padStart(2, '0')} :</span>
                            <span> {date.getMinutes().toString().padStart(2, '0')} :</span>
                            <span> {date.getSeconds().toString().padStart(2, '0')}</span>
                        </p>
                        </div>
                </div>
            </> : ""}
            {(props.mode === 1) ?
                <>
                <div>
                    <h1>Count-Down</h1>
                    <div className="clock-container">
                        <p className="clock">
                            <span><input className='hour_values' type="number" onChange={event => setTime({h:event.target.value})} value={time.h}/> :</span>
                            <span>  <input className='minute_values' type="number" onChange={event => setTime({m:event.target.value})} value={time.m}/> :</span>
                            <span>  <input className='second_values' type="number" onChange={event => setTime({s:event.target.value})} value={time.s}/></span>
                        </p>
                    </div>
                    <BtnTimer status={status} resume={resume} reset={reset} stop={stop} start={start}></BtnTimer>
                </div>
            </> : ""}
        </div>
    )
}

export default Mode;