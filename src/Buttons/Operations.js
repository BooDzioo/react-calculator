import React from 'react';

const Operations = (props) => {

    const handleClick = () => {
        props.handleChange(props.value);
    }

    return <button onClick={handleClick} className='operations'>{props.value}</button>
}

export default Operations;