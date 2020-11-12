import React from "react";
import {ReactComponent as SvgFigureWhite} from '../../../images/svg/figure-white.svg';
import SvgFigureWhite from '../../../images/figure-white.png';
import SvgFigureGreen from '../../../images/figure-green.png';

import "../../../css/homepage.scss";

class ContentHome extends React.Component {
    render() {
        return (
            <>
                <section className="section section-homepage-middle">
                    <div className="svg-figure svg-figure__white">
                        <img src={SvgFigureWhite} />
                    </div>
                    <div className="svg-figure svg-figure__green">
                        <img src={SvgFigureGreen} />
                    </div>
                    <div className="section__content">
                        <h3 className="section-title">Who we are</h3>
                        <p className="section-subtitle">Cluster Partnership Platform fascilitates communication and partnerships among clusters and businesses in the regions of Africa and Middle East.</p>
                        <p className="section-text">Cluster Partnership Platform provides means for clusters and their members to improve their performance and increase their competitiveness through regional and international cooperation, serves as a hub for cross-cluster communication, and  provides informational support that fascilitates effective cluster management. Rich content of our platform also adresses the needs and interests of potential cluster members, and is iseful for the cluster policy makers at regional, national or international level.</p>
                    </div>
                </section>

                <section className="section section-homepage-bottom">
                    <div className="section__content">
                        <h1 className="section-title">fsaf</h1>
                        <p className="section-text">fsaf</p>
                    </div>
                </section>

            </>
        );
    }
}

export default ContentHome;
