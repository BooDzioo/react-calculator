import React from 'react';

const Clear = (props) => {

    const handleClick = () => {
        props.handleClearClick()
    }

    return <button className='clearButton' onClick={handleClick}>C</button>
    
}

export default Clear;