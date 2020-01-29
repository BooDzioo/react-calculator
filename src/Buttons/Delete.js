import React from 'react';

const Delete = (props) => {
    
    return <button onClick={props.delete} className='operations'>{props.value}</button>
}

export default Delete;