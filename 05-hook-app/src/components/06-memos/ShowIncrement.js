import React from 'react';
import PropTypes from 'prop-types';


export const ShowIncrement = React.memo(({increment}) => {

    console.log('Hi!');


    return (
        <button
            className="btn btn-primary"
            onClick={()=>{
                increment(5)
            }}>
            increment
        </button>
    )
})


ShowIncrement.propTypes = {increment: PropTypes.number.isRequired}
