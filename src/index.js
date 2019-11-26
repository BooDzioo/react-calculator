import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { number } from 'yargs';
import { isNumberLiteral } from '@babel/types';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.delete()
    }
    render() {
        return(
            <button onClick={this.handleClick} className='operations'>{this.props.value}</button>
        )
    }
}

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
            method: '',
            sumed: '',
            operationHistory: '',
            isFloat: false
        }
        
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClearClick = this.handleClearClick.bind(this)
        this.handleOperation = this.handleOperation.bind(this)
        this.handleSumClick = this.handleSumClick.bind(this)
     //   this.delete = this.delete.bind(this)
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
/*
    delete() {
        let currentValue = this.state.currentValue
        let operationHistory = this.state.operationHistory
        let sumed = this.state.sumed
        let isFloat = this.state.isFloat
        if (sumed !== '') {
            this.setState({
                sumed: ''
            })
        }

        if (parseFloat(operationHistory.charAt(operationHistory.length - 1)) !== NaN) {
            if (isFloat) {
                if(operationHistory.charAt(operationHistory.length - 2) === '.') {
                    this.setState({
                        isFloat: false,
                        operationHistory: operationHistory.slice(0, -2),
                    })
                }
            }
            this.setState({
                currentValue: Math.floor(currentValue / 10),
                operationHistory: operationHistory.slice(0, -1)
            })
        } else if (operationHistory.charAt(operationHistory.length - 1) === '.') {
            this.setState({
                isFloat: false,
                currentValue: currentValue.slice(0, -1),
                operationHistory: operationHistory.slice(0, -1)
            }) 
        } else if (parseFloat(operationHistory.charAt(operationHistory.length - 1)) === NaN) {
            this.setState({
                method: '',
                isSecond: false
            })
        }
    }
*/
    handleSumClick() {

        const method = this.state.method
        const operationHistory = this.state.operationHistory

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
                default:
                    break;
           } 

            this.handleClearClick()
            this.setState({
                operationHistory: operationHistory,
                currentValue: sum,
                sumed: sum 
            })
        }   
    }
    

    handleOperation(e) {

        let currentValue = this.state.currentValue
        let previousValue = this.state.previousValue
        let method = this.state.method
        let sumed = this.state.sumed
        let operationHistory = this.state.operationHistory
        let sum = undefined;

        if(currentValue !== '' && previousValue !== '') { 
           if(method !== '') {

                let a = parseFloat(this.state.previousValue)
                let b = parseFloat(this.state.currentValue)

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
                    default:
                        break;
            }
            }   
    }
            if (isNaN(this.state.sumed) === false) {
                this.setState({
                    sumed: ''
             })
}

        if (typeof currentValue === 'string') {
            currentValue = parseFloat(currentValue)
            } 

        if (operationHistory !== '') {
            if (isNaN(parseFloat(operationHistory.charAt(operationHistory.length - 1))) === true) {
                operationHistory = operationHistory.slice(0, -1)
                this.setState({
                operationHistory: `${operationHistory}${e}`
                })
            } else {
                this.setState({
                    operationHistory: `${operationHistory}${e}`
                }) }
            }

        if (this.state.currentValue !== '') {
            this.setState({
                previousValue: currentValue   
        })
    }       
        
        if (sum !== undefined) currentValue = sum

        this.setState({
            method: e,
            isSecond: true,
            isFloat: false
    })
}  
    

    handleClearClick() {
        this.setState({
            operationHistory: '',
            currentValue: '',
            previousValue: '',
            method: '',
            sumed: ''
        })
    }
    

    handleChange(e) {

        const sumed = this.state.sumed
        let currentValue = this.state.currentValue
        let method = this.state.method
        let isSecond = this.state.isSecond
        let isFloat = this.state.isFloat
        let operationHistory = this.state.operationHistory

        if (sumed !== '') {
            this.setState({
                previousValue: '',
                sumed: ''
            })
            currentValue = ''
            operationHistory = ''
        }

        if (e === '.' || isFloat === true) {
            this.setState({
                isFloat: true,
                currentValue: `${currentValue}${e}`,
                operationHistory: `${operationHistory}${e}`
            })
        } else {
            let input = parseFloat(e)

            if (currentValue === '' || isSecond === true) {
                this.setState({
                    currentValue: input,
                    operationHistory: `${operationHistory}${input}`,
                    isSecond: false
            })
            } else {
                this.setState({
                    currentValue: currentValue * 10 + input,
                    operationHistory: `${operationHistory}${input}`    
                })
        } }
    }

    handleKeyDown(e) {
        let keyDown = `${e.key}`
        console.log(keyDown)
        switch (keyDown) {
            case 'Escape':
                this.handleClearClick()
                break;
            case '=':
            case 'Enter':
                this.handleSumClick()
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                this.handleChange(keyDown)
                break;
            case '+':
            case '-':
            case '^':
                this.handleOperation(keyDown)
                break; 
            case '*':
                this.handleOperation('x')
                break;
            case '/':
                this.handleOperation('÷') 
            default:
                break;
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {

        const operationHistory = this.state.operationHistory
        let sumed = ''

        if (this.state.sumed !== '') {
            sumed = `= ${this.state.sumed}`
        }
        
        return(
            <div className='calculator'>
                <div id="input">
                    <input id="operation_inp" value={operationHistory}></input>
                    <input value={sumed} id="sum_inp"></input>
                </div>
                <div className='boardRow'>
                    <ClearButton handleClearClick={this.handleClearClick}/>
                    <DeleteButton /*delete={this.delete}*/ value='←'/>
                    <Operations handleOperation={this.handleOperation} value='^'/>
                    <Operations handleOperation={this.handleOperation} value='÷'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='1' handleChange={this.handleChange}/>
                    <CalcButton value='2' handleChange={this.handleChange}/>
                    <CalcButton value='3' handleChange={this.handleChange}/>
                    <Operations handleOperation={this.handleOperation} value='x'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='4' handleChange={this.handleChange}/>
                    <CalcButton value='5' handleChange={this.handleChange}/>
                    <CalcButton value='6' handleChange={this.handleChange}/>
                    <Operations handleOperation={this.handleOperation} value='-'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='7' handleChange={this.handleChange}/>
                    <CalcButton value='8' handleChange={this.handleChange}/>
                    <CalcButton value='9' handleChange={this.handleChange}/>
                    <Operations handleOperation={this.handleOperation} value='+'/>
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

