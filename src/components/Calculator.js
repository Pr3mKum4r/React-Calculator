import React from "react";
import './Calculator.css';
import {useState} from 'react';

const Calculator = (props) => {
    const [output, setOutput] = useState('');
    const [miniOutput, setMiniOutput] = useState('');

    const clickHandler = (event) => {
        setOutput(output.concat(event.target.id));
        setMiniOutput(eval(output.concat(event.target.id)).toString());
    }
    const resultHandler = () => {
        setOutput(eval(output).toString());
        setMiniOutput('');
    }
    const clearHandler = () => {
        setOutput('');
        setMiniOutput('');
    }
    const cancelHandler = () => {
        setOutput(output.slice(0, output.length - 1));
        if(output.length !== 1){
            setMiniOutput(eval(output.slice(0, output.length - 1)).toString());
        }
        else{
            setMiniOutput('');
        }
    }
    return (
        <React.Fragment>
            <h1>Calculator</h1>
            <div className="boxCalc">
                <div className="display">
                    <div className="output" id="res">
                        <p className="MainOutput">{output}</p>
                        <p className="MiniOutput">{miniOutput}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button id="3.14" onClick={clickHandler}>&pi;</button>
                    <button id="2.71" onClick={clickHandler}>e</button>
                    <button id="C" onClick={clearHandler}>C</button>
                    <button id="Cancel" onClick={cancelHandler}>Cancel</button>
                    <br></br>
                    <button id="7" onClick={clickHandler}>7</button>
                    <button id="8" onClick={clickHandler}>8</button>
                    <button id="9" onClick={clickHandler}>9</button>
                    <button id="*" onClick={clickHandler}>x</button>
                    <br></br>
                    <button id="4" onClick={clickHandler}>4</button>
                    <button id="5" onClick={clickHandler}>5</button>
                    <button id="6" onClick={clickHandler}>6</button>
                    <button id="-" onClick={clickHandler}>-</button>
                    <br></br>
                    <button id="1" onClick={clickHandler}>1</button>
                    <button id="2" onClick={clickHandler}>2</button>
                    <button id="3" onClick={clickHandler}>3</button>
                    <button id="+" onClick={clickHandler}>+</button>
                    <br></br>
                    <button id="." onClick={clickHandler}>&bull;</button>
                    <button id="0" onClick={clickHandler}>0</button>
                    <button id="/" onClick={clickHandler}>&divide;</button>
                    <button id="=" onClick={resultHandler}>=</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Calculator; 