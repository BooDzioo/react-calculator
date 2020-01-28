import React from 'react';

class Num extends React.Component {

    handleClick = () => {
        this.props.handleChange(this.props.value)
    }
    render() {
        const value = this.props.value
        return (
            <button className='CalcButton' onClick={this.handleClick}>{value}</button>
        )
    }
}

export default Num;