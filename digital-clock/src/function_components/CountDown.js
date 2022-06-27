import React, {useEffect, useState, useRef} from 'react';

const CountDown= () => {

    const Hour_values= document.getElementById("hour-values");
    const Minute_values= document.getElementsById("minute-values");
    const Second_values= document.getElementsById("second-values");
    
        const [hour, setHour] = useState(hour= Hour_values.value);
        const [minute, setMinute] = useState(minute= Minute_values.value);
        const [second, setSecond] = useState(second= Second_values.value);
    
        let interval = useRef();
    
        const startTimer= ()=> {
            const countDown = new Date(hour, minute, second).getTime;
    
            interval = setInterval(() => {
                const now= new Date().getTime();
                const distance = countDown - now;
    
                const hour_now= Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
                const minute_now= Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
                const second_now= Math.floor((distance % (1000 * 60)) / 1000);
    
                if(distance < 0) {
                    //this stop our time
                    clearInterval(interval.current);
                }else {
                    //this update our time
                    setHour(hour_now);
                    setMinute(minute_now);
                    setSecond(second_now);
                }
            }, 1000);
        }
    
        useEffect(() => {
            startTimer();
            return () => {
                clearInterval(interval.current);
            }
        })
    
    const Section = () => {
        return (
            <div className='Button-container'>
                <span><input id='hour-values'>{hour}</input></span>
                <span><input id='minute-values'>{minute}</input></span>
                <span><input id='second-values'>{second}</input></span>
            </div>
        )
    }

    let [page, setPage] = useState(null)
    return (
        <button onClick={() => {
            setPage(
                page= <Section></Section>
            )
        }
            }>
                {page}
        </button>
    )
}

export default CountDown;