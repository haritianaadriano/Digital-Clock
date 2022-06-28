import React from 'react';

//Here is the Timer component

const Timer = (props) => {
    return (
        <>
            <div>
                <div className="clock-container">
                    <div className="clock">
                        <div className='span'><span>{(props.time.h >= 10)? props.time.h: "0" + props.time.h} :</span></div>
                        <div className='span'><span> {(props.time.m >= 10)? props.time.m: "0" + props.time.m} :</span></div>
                        <div className='span'><span> {(props.time.s >= 10)? props.time.s: "0" + props.time.s} :</span></div>
                        <div className='span'><span> {(props.time.ms >= 10)? props.time.ms: "0" + props.time.ms}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer;