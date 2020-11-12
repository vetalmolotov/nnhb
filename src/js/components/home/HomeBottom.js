import React from "react";
import ProjectsSlider from "../ProjectsSlider";
import ImageFigureLeft from '../../../images/figure-orange-left.png';
import ImageFigureRight from '../../../images/figure-orange-right.png';

import '../../../css/homepage-slider.scss';

class HomeBottom extends React.Component {
    render() {
        return (
            <section className="section section-homepage-bottom">
                <div className="svg-figure svg-figure__orange-left">
                    <img src={ImageFigureLeft} />
                </div>
                <div className="svg-figure svg-figure__orange-right">
                    <img src={ImageFigureRight} />
                </div>
                <div className="section__content">
                    <h3 className="section-title">Projects for Investment</h3>
                    <div className="projects__list">

                    </div>
                </div>
                <ProjectsSlider />
                <div className="projects__more">
                    <a href="#">Show all Projects</a>
                </div>
            </section>
        );
    }
}

export default HomeBottom;
