import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
        this.props.handleChange(this.props.value)
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

let numbers = []
let signs = []
let sum = []

const baseNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const baseSigns =   {                                                
    '^': '^',
    'x': 'x',
    '÷': '÷',
    '+': '+',
    '-': '-'

}

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            current: '',
            history: '',
            sumed: ''
        }
        
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClearClick = this.handleClearClick.bind(this)
        this.handleSumClick = this.handleSumClick.bind(this)
        this.delete = this.delete.bind(this)
    }

    handleChange(e) {
        if (e in baseSigns) {
            if (this.state.sumed !== '') {
                let sumed = this.state.sumed
                numbers.push(sumed.toString())
                signs.push(e)
               // console.log(`sumed: ${sumed}`)
                this.setState({sumed: '', history: `${sumed}${e}`})
               // console.log(`history: ${this.state.history}`)
            }
            if (this.state.current.indexOf('.') !== -1) {   //usuwa końcówki w stylu x.0000
                let v = this.state.current.indexOf('.')
                let y = true
                for (let i = this.state.current.length - 1; i > v; i--) {
                    if (this.state.current.charAt(i) !== 0) {
                        y = false
                        break;
                    }
                    this.setState({
                        current: this.state.current.slice(0, -1),
                        history: this.state.history.slice(0, -1)
                    })
                }
                if (y === true) {
                    this.setState({
                        current: this.state.current.slice(0, -1),
                        history: this.state.history.slice(0, -1)
                    })
                }
            }   

            if (this.state.current !== '') {
                    numbers.push(this.state.current)
                    this.setState({
                        current: ''
                    })
            }

            if (e === '-' && this.state.history.charAt(this.state.history.length - 1) !== '-') {
                if (this.state.history === '' || this.state.history.charAt(this.state.history.lenght - 1) in baseSigns) {    //dodawanie minusa do liczby
                    this.setState({
                        current: `${this.state.current}${e}`,
                        history: `${this.state.history}${e}`
                    })
                }   else {
                    const history = this.state.sumed != '' ? this.state.sumed : this.state.history
                    this.setState({
                        history: `${history}${e}`
                    })
                    signs = this.state.sumed != '' ? [] : signs
                    signs.push(e)
                }
            }   else {
                    if (parseFloat(numbers[signs.length]) !== NaN) {
                        if(this.state.history.charAt(this.state.history.length - 1) in baseSigns === false) {   //uniemożliwia wpisanie dwoch znaków pod rząd
                            signs = this.state.sumed != '' ? [] : signs
                            signs.push(e)
                            const history = this.state.sumed != '' ? this.state.sumed : this.state.history
                            this.setState({
                                history: `${history}${e}`
                            })
                        }
                    }
            }
        }


        if (e === '.' && this.state.current.indexOf('.') === -1) {
            if (this.state.current !== '') {    //uniemożliwienie wpisania kropki na początku
                this.setState({
                    current: `${this.state.current}${e}`,
                    history: `${this.state.history}${e}`
                })
            }
        }


        if (e in baseNumbers) {
            if (this.state.sumed !== '') {
                this.handleClearClick()
            }
            if (e === '0') {
                if (this.state.history.charAt(this.state.history.length - 1) !== '') {  //uniemożliwienie wpisania 0 na początku
                    this.setState({
                        history: `${this.state.history}${e}`,
                        current: `${this.state.current}${e}`
                    })
                }
            }
            if (e !== '0') {
                this.setState({
                    history: `${this.state.history}${e}`,
                    current: `${this.state.current}${e}`
                })
            }
        }
    }

    delete() {
       if (this.state.history.charAt(this.state.history.length - 1) in baseSigns) {
           if (this.state.current === this.state.history.charAt(this.state.history.length - 1)) {   //sprawdzanie czy liczba była ujemna
                this.setState({
                    current: '',
                    history: this.state.history.slice(0, -1)
                })    
           }    else {
                    this.setState({
                        history: this.state.history.slice(0, -1)
                    })
                    signs.pop()
           }
       }


       if (this.state.history.charAt(this.state.history.length - 1) === '.') {     //usuwanie kropek
            this.setState({
                history: this.state.history.slice(0, -1),
                current: this.state.current.slice(0, -1)
            })
       }


       if (this.state.history.charAt(this.state.history.length - 1) in baseNumbers) {
           if (this.state.current === '') {
               this.setState({
                   current: numbers[numbers.length - 1]
               })
               numbers.pop()
           }
           this.setState({
               current: this.state.current.slice(0, -1),
               history: this.state.history.slice(0, -1)
           })
       }
    }

    handleSumClick() {
        if (this.state.sumed != '') {
            this.handleClearClick()             //clearing state after second sum click
        }
        if (this.state.current.indexOf('.') !== -1) {
            let v = this.state.current.indexOf('.')
            let y = true
            for (let i = this.state.current.length - 1; i > v; i--) {
                if (this.state.current.charAt(i) !== 0) {
                    y = false
                    break;
                }
                this.setState({
                    current: this.state.current.slice(0, -1),
                    history: this.state.history.slice(0, -1)
                })
            }
            if (y === true) {
                this.setState({
                    current: this.state.current.slice(0, -1),
                    history: this.state.history.slice(0, -1)
                })
            }
        }   else if (this.state.current !== '') {
                numbers.push(this.state.current)
                this.setState({
                    current: ''
                })
        }

        for (let x = 0; x < numbers.length; x++) {
            let index = parseFloat(numbers[x])
            sum.push(index)
            sum.push(signs[x])   
        }
        
        
        while (sum.findIndex((element) => element === '^') !== -1) {
            let index = sum.findIndex((element) => element === '^')

            sum[index - 1] = Math.pow(sum[index - 1], sum[index + 1])
            sum.splice(index, 2)
        }

        while (sum.findIndex((element) => element === 'x') !== -1) {
            let index = sum.findIndex((element) => element === 'x')
 
            sum[index - 1] = sum[index - 1] * sum[index + 1]
            sum.splice(index, 2)
        }

        while (sum.findIndex((element) => element === '÷') !== -1) {
            let index = sum.findIndex((element) => element === '÷')
            
            sum[index - 1] = sum[index - 1] / sum[index + 1]
            sum.splice(index, 2)
        }

        while (sum.findIndex((element) => element === '+') !== -1) {    
            let index = sum.findIndex((element) => element === '+')

            sum[index - 1] = sum[index - 1] + sum[index + 1]
            sum.splice(index, 2)
        }

        while (sum.findIndex((element) => element === '-') !== -1) {    
            let index = sum.findIndex((element) => element === '-')

            sum[index - 1] = sum[index - 1]  - sum[index + 1]
            sum.splice(index, 2)
        }
    
        if (sum[0] === undefined) {     //suma bez drugiego wyrażenia
            this.setState({
                sumed: this.state.current
            })
        }    else { 
            this.setState({
                sumed: sum[0],
        })
        }

        numbers = []
        signs = []

        sum = []
    }

    handleClearClick() {
       sum = []
       signs = []
       numbers = []
       this.setState({
        current: '',
        history: '',
        sumed: ''
       })
    }

    handleKeyDown(e) {
        let keyDown = `${e.key}`
        
        switch (keyDown) {
            case 'Backspace':
                this.delete()
                break;
            case 'Delete':
            case 'Escape':
                this.handleClearClick()
                break;
            case 'Enter':
            case '=':
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
            case '+':
            case '-':
            case '^':
                this.handleChange(keyDown)
                break; 
            case '*':
                this.handleChange('x')
                break;
            case '/':
                this.handleChange('÷')
                break; 
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

        const operationHistory = this.state.history
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
                    <DeleteButton delete={this.delete} value='←'/>
                    <Operations handleChange={this.handleChange} value='^'/>
                    <Operations handleChange={this.handleChange} value='÷'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='1' handleChange={this.handleChange}/>
                    <CalcButton value='2' handleChange={this.handleChange}/>
                    <CalcButton value='3' handleChange={this.handleChange}/>
                    <Operations handleChange={this.handleChange} value='x'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='4' handleChange={this.handleChange}/>
                    <CalcButton value='5' handleChange={this.handleChange}/>
                    <CalcButton value='6' handleChange={this.handleChange}/>
                    <Operations handleChange={this.handleChange} value='-'/>
                </div>
                <div className='boardRow'>
                    <CalcButton value='7' handleChange={this.handleChange}/>
                    <CalcButton value='8' handleChange={this.handleChange}/>
                    <CalcButton value='9' handleChange={this.handleChange}/>
                    <Operations handleChange={this.handleChange} value='+'/>
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

