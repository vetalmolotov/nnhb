import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as LogoImage} from '../../images/logo.svg';

class SiteLogo extends React.Component {
    render() {
        return (
            <Link to="/">
                <LogoImage />
            </Link>
        );
    }
}

export default SiteLogo;
