import React from 'react';
import logo from '../../img/logo.png';
import "../../css/SASS/nav.css";

const NavBar = () => {

    return (
        <nav>
            <div className={"logo"}>
                <a href={"#"}><img className={"img_logo"} src={logo}  alt={"#"}/></a>
            </div>
            <div className={"list"}>
                <ul>
                    <li><a href={"#"}>Theme</a></li>
                    <li><a href={"#"}>Navbar</a>
                        <ul>
                            <li><a href={"#"}>Horizontal</a></li>
                            <li>/</li>
                            <li><a href={"#"}>Vertical</a></li>
                        </ul>
                    </li>
                    <li><a href={"#"}>Button</a></li>
                    <li><a href={"#"}>Footer</a></li>
                </ul>
            </div>
            <div>
                <span>Tout droit réservé ©</span>
            </div>
        </nav>
    )
};

export default NavBar;
