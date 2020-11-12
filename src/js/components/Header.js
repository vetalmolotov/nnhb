import React from "react";
import Signin from "./signin/Signin";
import SiteLogo from "./SiteLogo";
import {ReactComponent as FacebookIcon} from '../../images/icons/facebook.svg';
import {ReactComponent as LinkedinIcon} from '../../images/icons/linkedin.svg';
import {ReactComponent as TwitterIcon} from '../../images/icons/twitter.svg';
import SiteNavigation from "./SiteNavigation";

import "../../css/header.scss";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <SiteLogo />
                </div>
                <input type="checkbox" className="mob-menu" />
                <div className="header-content">
                    <div className="header-content-top">
                        {/*
                        Внутри этого блока тоже можно сделать разбивку на компоненты,
                        но тут я решил оставить как есть и не тратить время
                        */}
                        <div className="header-content__social">
                            <a href="#"><FacebookIcon /></a>
                            <a href="#"><LinkedinIcon /></a>
                            <a href="#"><TwitterIcon /></a>
                        </div>
                        <div className="header-content__lang">en</div>
                        <div className="header-content__auth">
                            <Signin />
                        </div>
                    </div>
                    <div className="header-content-bottom">
                        <SiteNavigation />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
