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
        this.handleDocumentClick=this.handleDocumentClick.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
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

    handleDocumentClick = (e) => {
        const isClose = e.target.closest(`[id=blur]`);

        if(isClose) {
            this.outConnect();
            this.outInsc();
        }
    }  

    componentDidMount() {
        document.addEventListener("click", this.handleDocumentClick); 
    }

    render() {
        const { conex, insc } = this.state;
        return (            
            <>
                <div className={"topRight"}>
                    <a href={"#"} id="toto" onClick={this.openConnect}>Log In</a>
                    <a href={"#"} onClick={this.openInsc}>Sign Up</a>
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

                {conex ? <>
                            <div className="formConnect">
                                <div onClick={this.outConnect} className="close-container">
                                    <div className="leftright"></div>
                                    <div className="rightleft"></div>
                                </div>
                                <h2>Login</h2>
                                <form className="form_conect">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" required></input>
                                    <label htmlFor="password">Your password</label>
                                    <input name="current-password" type="password" required></input>
                                    <div>
                                        <button type="submit">Submit</button>
                                        <a href={"#"} onClick={this.openInsc}>Sign Up</a>
                                    </div>
                                </form>
                            </div>
                            <div id="blur"></div>
                        </>
                    : ''
                }

                {insc ? <><div className="formConnect" id="inscip">
                            <div onClick={this.outInsc} className="close-container">
                                <div className="leftright"></div>
                                <div className="rightleft"></div>
                            </div>
                            <h2>Sign In</h2>
                            <form className="form_conect">
                                <label htmlFor="name">Your name</label>
                                <input type="text" name="name" required></input>
                                <label htmlFor="username">Choose a username</label>
                                <input type="text" name="username" required></input>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" required></input>
                                <label htmlFor="password">Choose password</label>
                                <input name="current-password" type="password" required></input>
                                <div>
                                    <button type="submit" className="btn_sub">Submit</button>                                             
                                    <a href={"#"} onClick={this.openConnect}>Log in</a>
                                </div>
                            </form> 
                        </div> 
                        <div id="blur"></div></>
                    : ''
                }

            </>
        )
    }
}


export default LoginSub;