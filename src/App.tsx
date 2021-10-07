import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CounterBox } from "./components/CounterBox";

function App(): JSX.Element {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <CounterBox counter={counter} setCounter={setCounter}></CounterBox>
        </div>
    );
}

export default App;
