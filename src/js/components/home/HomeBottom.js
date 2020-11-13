import React from "react";
import ProjectsSlider from "../ProjectsSlider";
import ProjectsMenuSlider from "../ProjectsMenuSlider";
import ImageFigureLeft from '../../../images/figure-orange-left.png';
import ImageFigureRight from '../../../images/figure-orange-right.png';

import '../../../css/homepage-slider.scss';

class HomeBottom extends React.Component {
    render() {
        return (
            <section className="section section-homepage-bottom projects">
                <div className="svg-figure svg-figure__orange-left">
                    <img src={ImageFigureLeft} />
                </div>
                <div className="svg-figure svg-figure__orange-right">
                    <img src={ImageFigureRight} />
                </div>
                <div className="section__content">
                    <h3 className="section-title">Projects for Investment</h3>
                    <div className="projects-list">
                        <a href="#" className="projects-list__item">All Industries</a>
                        <a href="#" className="projects-list__item projects-list__item--active">Tech</a>
                        <a href="#" className="projects-list__item">Logistics</a>
                        <a href="#" className="projects-list__item">Aerospace</a>
                        <a href="#" className="projects-list__item">Agriculture</a>
                        <a href="#" className="projects-list__item">Medical</a>
                        <a href="#" className="projects-list__item">More</a>
                    </div>
                    <ProjectsMenuSlider />
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
