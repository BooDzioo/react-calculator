import React from 'react';

const Num = (props) => {

    const handleClick = () => {
        props.handleChange(props.value);
    }

    return <button className='CalcButton' onClick={handleClick}>{props.value}</button>
}

export default Num;