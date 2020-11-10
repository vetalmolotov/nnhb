import React from "react";
import {Link} from "react-router-dom";
import Signin from "../signin/Signin";

class Header extends React.Component {
    render() {
        return (
            <ul className="header">
                <li>Cluster Colloboration Platform</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Signin />
                </li>
            </ul>
        );
    }
}

export default Header;
