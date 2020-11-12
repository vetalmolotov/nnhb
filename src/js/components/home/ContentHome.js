import React from "react";
import {ReactComponent as SvgFigureWhite} from '../../../images/svg/figure-white.svg';
import HomeMiddle from "./HomeMiddle";
import HomeBottom from "./HomeBottom";

import "../../../css/homepage.scss";

class ContentHome extends React.Component {
    render() {
        return (
            <>
                <HomeMiddle />
                <HomeBottom />
            </>
        );
    }
}

export default ContentHome;
