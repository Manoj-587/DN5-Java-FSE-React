import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor(props){
        super(props);

        this.state={
            amount:"",
            currency:"Euro"
        };
    }

    handleChange=(e)=>{
        this.setState({
            amount:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        // 1 Euro = 80 Rupees
        const euroAmount = this.state.amount * 80;

        alert("Converting to Euro Amount is " + euroAmount);
    }

    render(){

        return(

            <div>

                <h1 className="title">
                    Currency Convertor!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <label>Amount:</label>

                        <input
                            type="number"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="row">
                        <label>Currency:</label>

                        <input
                            type="text"
                            value={this.state.currency}
                            readOnly
                        />
                    </div>

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>

        );
    }
}

export default CurrencyConvertor;