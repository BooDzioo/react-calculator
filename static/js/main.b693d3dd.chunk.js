(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(3),i=a(5),h=a(4),c=a(1),r=a(6),l=a(0),o=a.n(l),u=a(8),d=a.n(u),C=(a(15),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(c.a)(a)),a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.delete()}},{key:"render",value:function(){return o.a.createElement("button",{onClick:this.handleClick,className:"operations"},this.props.value)}}]),t}(o.a.Component)),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(c.a)(a)),a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.handleChange(this.props.value)}},{key:"render",value:function(){return o.a.createElement("button",{onClick:this.handleClick,className:"operations"},this.props.value)}}]),t}(o.a.Component),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(c.a)(a)),a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.handleSumClick()}},{key:"render",value:function(){return o.a.createElement("button",{className:"sum",onClick:this.handleClick},"=")}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(c.a)(a)),a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.handleClearClick()}},{key:"render",value:function(){return o.a.createElement("button",{className:"clearButton",onClick:this.handleClick},"C")}}]),t}(o.a.Component),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(c.a)(a)),a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.handleChange(this.props.value)}},{key:"render",value:function(){var e=this.props.value;return o.a.createElement("button",{className:"CalcButton",onClick:this.handleClick},e)}}]),t}(o.a.Component),k=[],b=[],p=[],g=["1","2","3","4","5","6","7","8","9","0"],O={"^":"^",x:"x","\xf7":"\xf7","+":"+","-":"-"},j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={current:"",history:"",sumed:""},a.handleKeyDown=a.handleKeyDown.bind(Object(c.a)(a)),a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.handleClearClick=a.handleClearClick.bind(Object(c.a)(a)),a.handleSumClick=a.handleSumClick.bind(Object(c.a)(a)),a.delete=a.delete.bind(Object(c.a)(a)),a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){if(e in O){if(""!==this.state.sumed){var t=this.state.sumed;k.push(t.toString()),b.push(e),this.setState({sumed:"",history:"".concat(t).concat(e)})}if(-1!==this.state.current.indexOf(".")){for(var a=this.state.current.indexOf("."),n=!0,s=this.state.current.length-1;s>a;s--){if(0!==this.state.current.charAt(s)){n=!1;break}this.setState({current:this.state.current.slice(0,-1),history:this.state.history.slice(0,-1)})}!0===n&&this.setState({current:this.state.current.slice(0,-1),history:this.state.history.slice(0,-1)})}""!==this.state.current&&(k.push(this.state.current),this.setState({current:""})),"-"===e&&"-"!==this.state.history.charAt(this.state.history.length-1)?""===this.state.history||this.state.history.charAt(this.state.history.lenght-1)in O?this.setState({current:"".concat(this.state.current).concat(e),history:"".concat(this.state.history).concat(e)}):(this.setState({history:"".concat(this.state.history).concat(e)}),b.push(e)):NaN!==parseFloat(k[b.length])&&this.state.history.charAt(this.state.history.length-1)in O===!1&&(b.push(e),this.setState({history:"".concat(this.state.history).concat(e)}))}"."===e&&-1===this.state.current.indexOf(".")&&""!==this.state.current&&this.setState({current:"".concat(this.state.current).concat(e),history:"".concat(this.state.history).concat(e)}),e in g&&(""!==this.state.sumed&&this.handleClearClick(),"0"===e&&""!==this.state.history.charAt(this.state.history.length-1)&&this.setState({history:"".concat(this.state.history).concat(e),current:"".concat(this.state.current).concat(e)}),"0"!==e&&this.setState({history:"".concat(this.state.history).concat(e),current:"".concat(this.state.current).concat(e)}))}},{key:"delete",value:function(){this.state.history.charAt(this.state.history.length-1)in O&&(this.state.current===this.state.history.charAt(this.state.history.length-1)?this.setState({current:"",history:this.state.history.slice(0,-1)}):(this.setState({history:this.state.history.slice(0,-1)}),b.pop())),"."===this.state.history.charAt(this.state.history.length-1)&&this.setState({history:this.state.history.slice(0,-1),current:this.state.current.slice(0,-1)}),this.state.history.charAt(this.state.history.length-1)in g&&(""===this.state.current&&(this.setState({current:k[k.length-1]}),k.pop()),this.setState({current:this.state.current.slice(0,-1),history:this.state.history.slice(0,-1)}))}},{key:"handleSumClick",value:function(){if(-1!==this.state.current.indexOf(".")){for(var e=this.state.current.indexOf("."),t=!0,a=this.state.current.length-1;a>e;a--){if(0!==this.state.current.charAt(a)){t=!1;break}this.setState({current:this.state.current.slice(0,-1),history:this.state.history.slice(0,-1)})}!0===t&&this.setState({current:this.state.current.slice(0,-1),history:this.state.history.slice(0,-1)})}else""!==this.state.current&&(k.push(this.state.current),this.setState({current:""}));for(var n=0;n<k.length;n++){var s=parseFloat(k[n]);p.push(s),p.push(b[n])}for(;-1!==p.findIndex((function(e){return"^"===e}));){var i=p.findIndex((function(e){return"^"===e}));p[i-1]=Math.pow(p[i-1],p[i+1]),p.splice(i,2)}for(;-1!==p.findIndex((function(e){return"x"===e}));){var h=p.findIndex((function(e){return"x"===e}));p[h-1]=p[h-1]*p[h+1],p.splice(h,2)}for(;-1!==p.findIndex((function(e){return"\xf7"===e}));){var c=p.findIndex((function(e){return"\xf7"===e}));p[c-1]=p[c-1]/p[c+1],p.splice(c,2)}for(;-1!==p.findIndex((function(e){return"+"===e}));){var r=p.findIndex((function(e){return"+"===e}));p[r-1]=p[r-1]+p[r+1],p.splice(r,2)}for(;-1!==p.findIndex((function(e){return"-"===e}));){var l=p.findIndex((function(e){return"-"===e}));p[l-1]=p[l-1]-p[l+1],p.splice(l,2)}void 0===p[0]?this.setState({sumed:this.state.current}):this.setState({sumed:p[0]}),k=[],b=[],p=[]}},{key:"handleClearClick",value:function(){p=[],b=[],k=[],this.setState({current:"",history:"",sumed:""})}},{key:"handleKeyDown",value:function(e){var t="".concat(e.key);switch(t){case"Backspace":this.delete();break;case"Delete":case"Escape":this.handleClearClick();break;case"Enter":case"=":this.handleSumClick();break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":case".":case"+":case"-":case"^":this.handleChange(t);break;case"*":this.handleChange("x");break;case"/":this.handleChange("\xf7")}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state.history,t="";return""!==this.state.sumed&&(t="= ".concat(this.state.sumed)),o.a.createElement("div",{className:"calculator"},o.a.createElement("div",{id:"input"},o.a.createElement("input",{id:"operation_inp",value:e}),o.a.createElement("input",{value:t,id:"sum_inp"})),o.a.createElement("div",{className:"boardRow"},o.a.createElement(v,{handleClearClick:this.handleClearClick}),o.a.createElement(C,{delete:this.delete,value:"\u2190"}),o.a.createElement(m,{handleChange:this.handleChange,value:"^"}),o.a.createElement(m,{handleChange:this.handleChange,value:"\xf7"})),o.a.createElement("div",{className:"boardRow"},o.a.createElement(f,{value:"1",handleChange:this.handleChange}),o.a.createElement(f,{value:"2",handleChange:this.handleChange}),o.a.createElement(f,{value:"3",handleChange:this.handleChange}),o.a.createElement(m,{handleChange:this.handleChange,value:"x"})),o.a.createElement("div",{className:"boardRow"},o.a.createElement(f,{value:"4",handleChange:this.handleChange}),o.a.createElement(f,{value:"5",handleChange:this.handleChange}),o.a.createElement(f,{value:"6",handleChange:this.handleChange}),o.a.createElement(m,{handleChange:this.handleChange,value:"-"})),o.a.createElement("div",{className:"boardRow"},o.a.createElement(f,{value:"7",handleChange:this.handleChange}),o.a.createElement(f,{value:"8",handleChange:this.handleChange}),o.a.createElement(f,{value:"9",handleChange:this.handleChange}),o.a.createElement(m,{handleChange:this.handleChange,value:"+"})),o.a.createElement("div",{className:"boardRow"},o.a.createElement(f,{value:"0",handleChange:this.handleChange}),o.a.createElement(f,{value:".",handleChange:this.handleChange}),o.a.createElement(y,{handleSumClick:this.handleSumClick})))}}]),t}(o.a.Component);d.a.render(o.a.createElement(j,{className:"calculator"}),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.b693d3dd.chunk.js.map