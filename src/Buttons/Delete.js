import React from 'react';

class Delete extends React.Component {

    handleClick = () => {
        this.props.delete()
    }
    
    render() {
        return(
            <button onClick={this.handleClick} className='operations'>{this.props.value}</button>
        )
    }
}

export default Delete;