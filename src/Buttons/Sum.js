import React from 'react';

const Sum = (props) => {

    const handleClick = () => {
        props.handleSumClick()
    }

    return <button className='sum' onClick={handleClick}>=</button>
}

export default Sum;