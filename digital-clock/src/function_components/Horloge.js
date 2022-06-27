import { useState, useEffect } from "react";

const Horloge = () =>{
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

return (
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
    </>
)    
};

export default Horloge;