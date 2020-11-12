import React from "react";
import Header from "./Header";

import "../../css/content-top.scss";
import {Route, Switch} from "react-router-dom";

class ContentHeader extends React.Component {
    render() {
        return (
            <section className="section section-header">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <div className="section__content">
                            <h1 className="section-title">Collaboration Platform for Africa and Middle East</h1>
                            <p className="section-text">Cluster Collaboration Platform provides networking and information support for clusters and their members aiming to improve their performance and increase their competitiveness through trans-national and international cooperation.</p>
                        </div>
                    </Route>
                    <Route exact path="/about">
                        <div className="section__content">
                            <h1 className="section-title">About Our Platform</h1>
                            <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </Route>
                </Switch>

            </section>
        );
    }
}

export default ContentHeader;
