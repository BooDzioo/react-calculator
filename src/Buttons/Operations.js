import React from 'react';

class Operations extends React.Component {

    handleClick = () => {
        this.props.handleChange(this.props.value)
    }
    render() {
        return(
        <button onClick={this.handleClick} className='operations'>{this.props.value}</button>
        )
    }
}

export default Operations;