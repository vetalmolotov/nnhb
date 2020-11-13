import React, { Component } from "react";
import Slider from "react-slick";


class ProjectsMenuSlider extends Component {
    render() {
        const settings = {
            className: "projects-list projects-list-mob variable-width",
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div><a href="#" className="projects-list__item">All Industries</a></div>
                    <div><a href="#" className="projects-list__item projects-list__item--active">Tech</a></div>
                    <div><a href="#" className="projects-list__item">Logistics</a></div>
                    <div><a href="#" className="projects-list__item">Aerospace</a></div>
                    <div><a href="#" className="projects-list__item">Agriculture</a></div>
                    <div><a href="#" className="projects-list__item">Medical</a></div>
                    <div><a href="#" className="projects-list__item">More</a></div>
                </Slider>
            </div>
        );
    }
}

export default ProjectsMenuSlider;
