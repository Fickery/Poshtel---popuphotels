import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component } from "react";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      easing: "ease-in-out",
      lazyLoad: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1.3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="container">
          <Slider {...settings}>
            <div>
              <img
                className="slider-img"
                width="400px"
                src="https://images.unsplash.com/photo-1571414151261-3763986bab19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
            </div>
            <div>
              <img
                width="400px"
                src="https://images.unsplash.com/photo-1571414151261-3763986bab19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
            </div>
            <div>
              <img
                className="slider-img"
                width="400px"
                src="https://images.unsplash.com/photo-1571414151261-3763986bab19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
            </div>
            <div>
              <img
                width="400px"
                src="https://images.unsplash.com/photo-1571414151261-3763986bab19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
