import React from "react";

export function CounterBox({counter, setCounter}: {counter: number, setCounter: (p: number)=> void}): JSX.Element {
    
    const addCounter = () => {
        setCounter(counter+1);
    };

    const subtractCounter = () => {
        setCounter(counter-1);
    };

    return <>
        <div className='counter-box'>Counter: </div> {counter}
        <p><button onClick={addCounter}>Increase Counter</button></p><p><button onClick={subtractCounter}>Decrease Counter</button></p>
    </>;
}