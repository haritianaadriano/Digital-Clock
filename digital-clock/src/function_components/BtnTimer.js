import React from 'react';

//Here is the button reactive

const BtnTimer = (props) => {
    return (
        <div>
            {(props.status===0) ? 
                <button className='Start' onClick={props.start}>Start</button> : ""
        }

            {(props.status===1) ? 
                <div>
                    <button className='Stop' onClick={props.stop}>Stop</button>
                    <button className='Reset' onClick={props.reset}>Reset</button> 
                </div>: ""
        }

        {(props.status===2) ? 
                <div>
                    <button className='Resume' onClick={props.resume}>Resume</button>
                    <button className='Reset' onClick={props.reset}>Reset</button> 
                </div>: ""
        }
        </div>
    )
}

export default BtnTimer;