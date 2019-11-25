import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Operations extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleOperation(this.props.value)
    }
    render() {
        return(
        <button onClick={this.handleClick} className='operations'>{this.props.value}</button>
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
        this.sqrt = this.sqrt.bind(this)
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

    sqrt(a) {
        console.log('eee')
        return Math.sqrt(a)
    } 

    handleSumClick() {
        const method = this.state.method
        if(method !== ''){
            let a = parseFloat(this.state.previousValue)
            let b = parseFloat(this.state.currentValue)
            let sum = a;
            switch(method) {
                case '+':
                    sum = this.add(a, b)
                    break;
                case '-':
                    sum = this.sub(a, b)
                    break;
                case '÷':
                    sum = this.div(a, b)
                    break;
                case 'x':
                    sum = this.mult(a ,b)
                    break;
                case '^':
                    sum = this.pow(a, b)
                    break;
           }
            this.handleClearClick()
            this.setState({
                currentValue: sum,
                afterSum: true
            })
        }   
    }

    handleOperation(e) {
        let currentValue = this.state.currentValue
        if (typeof currentValue === 'string') {
            currentValue = parseFloat(currentValue)
            console.log('string')
            } 
        if (e === '√') {
            this.setState({
            method: e,
            currentValue: this.sqrt(this.state.currentValue)     
            })
        } else {
            this.setState({
            method: e,
            previousValue: currentValue,
            isSecond: true,
            isFloat: false
        })}
       
    }

    handleClearClick() {
        this.setState(state => ({
            currentValue: '',
            previousValue: '',
            method: ''
        }))
    }

    handleChange(e) {
        const afterSum = this.state.afterSum
        let currentValue = this.state.currentValue
        let method = this.state.method
        let isSecond = this.state.isSecond
        let isFloat = this.state.isFloat
        if (afterSum == true) {
            this.setState({
                afterSum: false,
                previousValue: ''
            })
            currentValue = ''
        }
        if (e === '.' || isFloat === true) {
            this.setState({
                isFloat: true,
                currentValue: `${currentValue}${e}`
            })
        } else {
            let input = parseFloat(e)
            if (currentValue === '' || isSecond === true) {
            this.setState({
                currentValue: input,
                isSecond: false
            })
            } else {
                this.setState({currentValue: currentValue * 10 + input})
        } }
    }

    render() {
        const value = this.state.currentValue
        return(
            <div className='calculator'>
                <input value={value}></input>
                <div className='boardRow'>
                    <ClearButton handleClearClick={this.handleClearClick}/>
                    <Operations handleOperation={this.handleOperation} value='^'/>
                    <Operations handleOperation={this.handleOperation} value='√'/>
                    <Operations handleOperation={this.handleOperation} value='+'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='1' handleChange={this.handleChange}/>
                    <CalcButton value='2' handleChange={this.handleChange}/>
                    <CalcButton value='3' handleChange={this.handleChange}/>
                    <Operations handleOperation={this.handleOperation} value='-'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='4' handleChange={this.handleChange}/>
                    <CalcButton value='5' handleChange={this.handleChange}/>
                    <CalcButton value='6' handleChange={this.handleChange}/>
                    <Operations handleOperation={this.handleOperation} value='x'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='7' handleChange={this.handleChange}/>
                    <CalcButton value='8' handleChange={this.handleChange}/>
                    <CalcButton value='9' handleChange={this.handleChange}/>
                    <Operations handleOperation={this.handleOperation} value='÷'/>
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
        <Calculator className='calculator'/>, document.getElementById('root')
)

