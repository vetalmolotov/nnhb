import React, { Component } from "react";
import Slider from "react-slick";
import Image1 from '../../images/image01.png';
import Image2 from '../../images/image02.png';
import Image3 from '../../images/image03.png';
import Image4 from '../../images/image04.png';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

class ProjectsSlider extends Component {
    render() {
        const settings = {
            className: "projects variable-width",
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="projects__wrapper">
                <Slider {...settings}>
                    {/*
                    еслиб была api и с бекэнда приходили какие-то данные, то
                    лучшеб было применить тут {.map()}
                    */}
                    <div className="projects-item">
                        <div className="projects-item__image">
                            <img src={Image1} />
                        </div>
                        <div className="projects-item__info">
                            <h4>Dubai IT Cluster </h4>
                            <p>Of properly carriage shutters ye as wandered up repeated moreover</p>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item__image">
                            <img src={Image2} />
                        </div>
                        <div className="projects-item__info">
                            <h4>Dubai IT Cluster </h4>
                            <p>And can event rapid any shall woman green. Hope they dear who</p>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item__image">
                            <img src={Image3} />
                        </div>
                        <div className="projects-item__info">
                            <h4>Dubai IT Cluster </h4>
                            <p>Truth short folly court why she their balls. Excellence put unaffected</p>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item__image">
                            <img src={Image4} />
                        </div>
                        <div className="projects-item__info">
                            <h4>Dubai IT Cluster </h4>
                            <p>Concerns greatest margaret him absolute entrance nay</p>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item__image">
                            <img src={Image3} />
                        </div>
                        <div className="projects-item__info">
                            <h4>Dubai IT Cluster </h4>
                            <p>Of properly carriage shutters ye as wandered up repeated moreover</p>
                        </div>
                    </div>
                    <div className="projects-item">
                        <div className="projects-item__image">
                            <img src={Image4} />
                        </div>
                        <div className="projects-item__info">
                            <h4>Dubai IT Cluster </h4>
                            <p>And can event rapid any shall woman green. Hope they dear who</p>
                        </div>
                    </div>
                </Slider>
                <div className="projects__notify">
                    All investments secured by Blockchain Technology ©
                </div>
            </div>
        );
    }
}

export default ProjectsSlider;
