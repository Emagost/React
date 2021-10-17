import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ 
    hello = 'Hello world',
    subtitle = 'Subtitle'
    }) => {

    return (
        <>
            <h1>{hello}</h1>
            {/* <pre>{JSON.stringify(hello,null,3)}</pre> */}
            <p>{subtitle}</p>
        </>
        );

}

FirstApp.propTypes = {
    hello: PropTypes.string
}

FirstApp.defaultProps = {
    subtitle: 'Hello Subtitle'
}

export default FirstApp;