import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';


export const MultipleCustomHooks = () => {

    const {counter, increment,reset, setNewCounter} = useCounter(1);

    const {loading, data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { author, quote } = !!data && !!data[0] && data[0];

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
            <h1>BreakingBad Quotes</h1>
            <hr/>

        { loading 
            ? 
            (
            <div className="alert alert-info text-center">
                loading...
            </div>
            )
            :
            (
            <blockquote className="blockquote text-end">
                <p className="mb-0"> {quote}</p>
                <footer className="blockquote-footer mt-1">{author}</footer>
            </blockquote>
            )
        }

        <button 
            className="btn btn-primary"
            onClick={handleValuesPositive}>
            Next quote
        </button>

        </div>
    )
}
