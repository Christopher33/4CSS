import React from 'react';
import "../../css/SASS/topRight.css";
import "../../css/SASS/formConnect.scss";


class LoginSub extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            insc: false,
            conex: false
            };

        this.openConnect=this.openConnect.bind(this);
        this.openInsc=this.openInsc.bind(this);
        this.outConnect=this.outConnect.bind(this);
        this.outInsc=this.outInsc.bind(this);
        // this.outClick=this.outClick.bind(this);
    }

    openConnect () {
        if(this.state.conex === false) {
            this.setState({conex: true});
            this.setState({insc: false});
        } else {
            this.setState({conex: false})
        }
    }

    openInsc () {
        if(this.state.insc === false) {
            this.setState({insc: true});
            this.setState({conex: false});
        } else {
            this.setState({insc: false});
        }
    }

    outConnect () {

        this.setState({conex: false});
    }

    outInsc () {
        this.setState({insc: false});
    }

    // outClick () {
    //     const out = document.getElementById("out");
    //     window.onclick = function(event) {
    //         if(event.taget === out) {
    //             console.log("out")
    //         }
    //     };
    // }


    render() {
        const { conex, insc } = this.state;
        return (
            <>
                <div className={"topRight"}>
                    <a href={"#"} onClick={this.openConnect}>Connexion</a>
                    <a href={"#"} onClick={this.openInsc}>Inscription</a>
                    <div className={"blackOrWhite"}>
                        <div>
                            <span>Black</span>
                            <hr className={"separateLigne"} />
                            <span>White</span>
                        </div>
                        <label>
                            <input type={"checkbox"}/>
                            <span></span>
                            <i className={"indicator"}></i>
                        </label>
                    </div>
                </div>
                <div className={`${conex ? "formConnect" : 'formClose'}`} id="out">
                    <button onClick={this.outConnect}>X</button>
                    <form>
                        <label>Name :</label>
                        <input></input>
                    </form>                 
                </div>
                <div className={`${insc ? "pomme" : 'formClose'}`}>
                <button onClick={this.outInsc}>X</button>
                    <form>
                        <label>Name :</label>
                        <input></input>
                    </form>
                </div>
            </>
        )
    }
}


export default LoginSub;