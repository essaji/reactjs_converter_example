import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{

    constructor(){
        super();

        this.state = {
            data: [],
            number: 0
        };


        this.setStateHandler = this.setStateHandler.bind(this);
        this.numberChanged = this.numberChanged.bind(this);
    }

    setStateHandler(){

        if(!this.state.number) return;
        var R = Math.random()*100;

        var d = new Date().toISOString();
        var date = d.slice(0,10)+" "+d.slice(14,19);
        var result = this.state.number * (1+(R - 50)/1000);


        var data = this.state.data;
        data.push({
            number: result,
            time: date
        });

        this.setState({data: data});
    }

    numberChanged(e){
        this.state.number = e.target.value;
    }

    render(){

        return (
            <div>
                <h2>EUR to PLN</h2>
                <input type="number" placeholder="Enter Number" onChange = {this.numberChanged} /> <button onClick={this.setStateHandler}  >Convert</button>
                <br />
                {this.state.data.map((result,i) => <Result result = {result} />)}
            </div>
        );
    }


}

class Result extends React.Component{

    constructor(){
        super();

        this.myStyle = {
            backgroundColor: "#F1F1F1",
            padding: 10,
            display: "inline-block",
            margin: "10px",
            borderRadius: 10
        };

        this.timeStyle = {
            color: "lightgray"
        }
    }

    render(){
        return (
            <span>
                <div style={this.myStyle} >
                    <h1>{this.props.result.number}</h1>
                    <small style={this.timeStyle} >{this.props.result.time}</small>
                </div>
            </span>
        );
    }
}




export default App;