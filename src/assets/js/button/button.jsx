import React from 'react';
import ReactDOM from 'react-dom';

import jsxToString from 'jsx-to-string';


const front = ".btnn{\n" +
    "    color: white;\n" +
    "    background: cadetblue;\n" +
    "    border: solid 2px darkgray;\n" +
    "    border-radius: 15%;\n" +
    "    padding: 10px 15px;\n" +
    "}\n" +
    "\n" +
    ".blue{\n" +
    "    font-size: 2em;\n" +
    "}\n";

const back = <a class="btnn blue" href="#">Button</a>;

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textHtml: jsxToString(back)};
        this.look = {frontCss: front};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState(this.state = {textHtml: event.target.value});
        console.log(jsxToString(back));
    }

    handleChange2(event) {
        this.setState(this.look = {frontCss: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="dispo">

                <style>
                    {this.look.frontCss}
                </style>

                <div dangerouslySetInnerHTML={{__html: this.state.textHtml}}/>

                <form onSubmit={this.handleSubmit} className="space">
                    <label>Html:
                        <input type="text" value={this.state.textHtml} onChange={this.handleChange1} />
                    </label>
                </form>

                <form onSubmit={this.handleSubmit} className="space">
                    <label>CSS:
                        <input type="text" value={this.look.frontCss} onChange={this.handleChange2} />
                    </label>
                </form>
            </div>
        )
    }

}

ReactDOM.render(
    <Button/>,
    document.getElementById(''),
);