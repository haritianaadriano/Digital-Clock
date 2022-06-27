import React from "react";

const Count_Down= (props) => {
    return (
        <>
            <div>
                <div className="clock-container">
                    <div className="clock">
                        <span><input id="hour_values"/>{props.reverse.H} :</span>
                        <span> <input id="minutes_values"/>{props.reverse.M} :</span>
                        <span> <input id="second_values"/>{props.reverse.S} </span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Count_Down;