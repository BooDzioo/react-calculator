import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Power extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleOperation('pow')
    }
    render() {
        return(
            <button onClick={this.handleClick} className='operations'>^</button>
        )
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        
    }
    render() {
        return(
            <button onClick={this.handleClick} className='operations'>√</button>
        )
    }
}

class AddButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleOperation('add')
    }
    render() {
        return (
            <button className='operations' onClick={this.handleClick}>+</button>
        )
    }
}

class SubstractButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleOperation('sub')
    }
    render() {
        return (
            <button className='operations' onClick={this.handleClick}>-</button>
        )
    }
}

class MultiplyButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleOperation('mult')
    }
    render() {
        return (
            <button className='operations' onClick={this.handleClick}>x</button>
        )
    }
}

class DivideButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleOperation('div')
    }
    render() {
        return (
            <button className='operations' onClick={this.handleClick}>÷</button>
        )
    }
}

class SumButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleSumClick()
    }
    render() {
        return(
            <button className='sum' onClick={this.handleClick}>=</button>
        )
    }
}

class ClearButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleClearClick()
    }
    render() {
        return(
            <button className='clearButton' onClick={this.handleClick}>C</button>
        );
    }
}

class CalcButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleChange(this.props.value)
    }
    render() {
        const value = this.props.value
        return (
            <button className='CalcButton' onClick={this.handleClick}>{value}</button>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentValue: '',
            previousValue: '',
            method: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClearClick = this.handleClearClick.bind(this)
        this.handleOperation = this.handleOperation.bind(this)
        this.handleSumClick = this.handleSumClick.bind(this)
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.mult = this.mult.bind(this)
        this.div = this.div.bind(this)
        this.pow = this.pow.bind(this)
    }

    add(a, b) {
        return a + b
    }

    sub(a, b) {
        return a - b
    }

    mult(a, b) {
        return a * b
    }

    div(a, b) {
        return a / b
    }

    pow(a, b) {
        return Math.pow(a, b)
    }

   /* sqrt(a) {
        return Math.sqrt(a)
    } */

    handleSumClick() {
        if(this.state.method !== ''){
            const a = this.state.previousValue
            const b = this.state.currentValue
            const sum = this.state.method === 'add' ? this.add(a, b) : this.state.method === 'sub' ? this.sub(a, b) : this.state.method === 'div' ? this.div(a, b) : this.state.method === 'mult' ? this.mult(a, b) : this.pow(a, b)
            this.handleClearClick()
            this.setState({currentValue: sum})
        }   
    }

    handleOperation(e) {
        this.setState({
            method: e,
            previousValue: this.state.currentValue,
            currentValue: ''
        })
        console.log(this.state.previousValue)
        console.log(this.state.currentValue)
        console.log(this.state.method)
    }

    handleClearClick() {
        this.setState(state => ({
            currentValue: '',
            previousValue: '',
            method: ''
        }))
    }

    handleChange(e) {
        let input = parseFloat(e)
        if(this.state.currentValue === '') {
           this.setState({currentValue: input})
       } else {
           this.setState({currentValue: this.state.currentValue * 10 + input})
       }
    }

    render() {
        const value = this.state.currentValue
        return(
            <div className='calculator'>
                <input value={value}></input>
                <div className='boardRow'>
                    <ClearButton handleClearClick={this.handleClearClick}/>
                    <Power handleOperation={this.handleOperation}/>
                    <Square />
                    <AddButton handleOperation={this.handleOperation}/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='1' handleChange={this.handleChange}/>
                    <CalcButton value='2' handleChange={this.handleChange}/>
                    <CalcButton value='3' handleChange={this.handleChange}/>
                    <SubstractButton handleOperation={this.handleOperation}/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='4' handleChange={this.handleChange}/>
                    <CalcButton value='5' handleChange={this.handleChange}/>
                    <CalcButton value='6' handleChange={this.handleChange}/>
                    <MultiplyButton handleOperation={this.handleOperation}/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='7' handleChange={this.handleChange}/>
                    <CalcButton value='8' handleChange={this.handleChange}/>
                    <CalcButton value='9' handleChange={this.handleChange}/>
                    <DivideButton handleOperation={this.handleOperation}/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='0' handleChange={this.handleChange}/>
                    <CalcButton value='.' handleChange={this.handleChange}/>
                    <SumButton handleSumClick={this.handleSumClick}/>
                </div>
            </div>
        );
    }

}

ReactDOM.render(
        <Calculator className='calculator'/>,
    document.getElementById('root')
)

