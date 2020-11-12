import React from "react";
import ImageFigureWhite from '../../../images/figure-white.png';
import ImageFigureGreen from '../../../images/figure-green.png';


class HomeMiddle extends React.Component {
    render() {
        return (
            <section className="section section-homepage-middle">
                <div className="svg-figure svg-figure__white">
                    <img src={ImageFigureWhite} />
                </div>
                <div className="svg-figure svg-figure__green">
                    <img src={ImageFigureGreen} />
                </div>
                <div className="section__content">
                    <h3 className="section-title">Who we are</h3>
                    <p className="section-subtitle">Cluster Partnership Platform fascilitates communication and partnerships among clusters and businesses in the regions of Africa and Middle East.</p>
                    <p className="section-text">Cluster Partnership Platform provides means for clusters and their members to improve their performance and increase their competitiveness through regional and international cooperation, serves as a hub for cross-cluster communication, and  provides informational support that fascilitates effective cluster management. Rich content of our platform also adresses the needs and interests of potential cluster members, and is iseful for the cluster policy makers at regional, national or international level.</p>
                </div>
            </section>
        );
    }
}

export default HomeMiddle;
