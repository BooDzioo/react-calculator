import React from 'react';

class Sum extends React.Component {

    handleClick = () => {
        this.props.handleSumClick()
    }
    render() {
        return(
            <button className='sum' onClick={this.handleClick}>=</button>
        )
    }
}

export default Sum;