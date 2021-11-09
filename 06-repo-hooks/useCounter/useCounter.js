import { useState } from "react"

const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () =>{
        setCounter(counter + 1);
    }
    const decrement = () =>{
        setCounter(counter - 1);
    }
    const reset = () =>{
        setCounter(initialState);
    }

    const setNewCounter = ( value ) => {
        setCounter(value)
    };

    return {
        counter,
        increment,
        decrement,
        reset,
        setNewCounter,
    }
}

export default useCounter;
