import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './layout.css'


export const Layout = () => {

    const {counter, increment,reset, setNewCounter} = useCounter(1);

    const {data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote } = !!data && !!data[0] && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        
        setBoxSize(pTag.current.getBoundingClientRect() );

    }, [quote])

    const handleValuesPositive = () => {

        if (counter < 30) {
            return increment(1);
        }
        setNewCounter(63);
        
        if (counter > 30 && counter < 102) {
            return increment(1);
        } 
        
        if (counter >= 102) {
            return reset();
        }
    }


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-end">
                <p 
                    className="mb-0"
                    ref={pTag}
                    > 
                {quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null,3)}
            </pre>


        <button 
            className="btn btn-primary"
            onClick={handleValuesPositive}>
            Next quote
        </button>

        </div>
    )
}
