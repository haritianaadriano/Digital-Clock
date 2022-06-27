import React from 'react';

const BtnCountDown = (props) => {
    return (
        <div>
            <button className='Start' onClick={props.inverse}>Start</button>
        </div>
    )
}

export default BtnCountDown;