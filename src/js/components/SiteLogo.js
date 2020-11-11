import React from "react";
import {ReactComponent as LogoImage} from '../../images/logo.svg';

class SiteLogo extends React.Component {
    render() {
        return (
            <a href="/">
                <LogoImage />
            </a>
        );
    }
}

export default SiteLogo;
