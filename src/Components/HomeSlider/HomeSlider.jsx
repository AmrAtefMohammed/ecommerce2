import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from '../../assets/images/slider-image-1.jpeg'
import sliderImage2 from '../../assets/images/slider-image-2.jpeg'
import sliderImage3 from '../../assets/images/slider-image-3.jpeg'
import sliderImage4 from '../../assets/images/slider-2.jpeg'
import sliderImage5 from '../../assets/images/grocery-banner.png'
import sliderImage6 from '../../assets/images/grocery-banner-2.jpeg'

export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
    
};
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img className="w-full h-80" src={sliderImage1} alt="" />
                </div>
                <div>
                    <img className="w-full h-80" src={sliderImage2} alt="" />
                </div>
                <div>
                    <img className="w-full h-80" src={sliderImage3} alt="" />
                </div>
                <div>
                    <img className="w-full h-80" src={sliderImage4} alt="" />
                </div>
                <div>
                    <img className="w-full h-80" src={sliderImage5} alt="" />
                </div>
                <div>
                    <img className="w-full h-80" src={sliderImage6} alt="" />
                </div>
            </Slider>
        </div>
);
}
