import React from 'react';

const Delete = (props) => {

    const handleClick = () => {
        props.delete()
    }
    
    return <button onClick={handleClick} className='operations'>{props.value}</button>
}

export default Delete;