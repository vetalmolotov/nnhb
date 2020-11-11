import React from "react";
import {Link} from "react-router-dom";

class SiteNavigation extends React.Component {
    render() {
        return (
            <nav className="header-navigation">
                <Link to="/about">About</Link>
                <Link to="/">Organizations</Link>
                <Link to="/">Partnerships</Link>
                <Link to="/">Events</Link>
                <Link to="/">Community</Link>
                <Link to="/">Matchmaking</Link>
                <Link to="/">Crowdfunding</Link>
            </nav>
        );
    }
}

export default SiteNavigation;
