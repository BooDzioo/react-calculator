import React from 'react';

class Clear extends React.Component {

    handleClick = () => {
        this.props.handleClearClick()
    }
    render() {
        return(
            <button className='clearButton' onClick={this.handleClick}>C</button>
        );
    }
}

export default Clear;