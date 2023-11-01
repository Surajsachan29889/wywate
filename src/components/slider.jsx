import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FaArrowRight  from "../../public/rightarrow.svg";
import FaArrowLeft  from "../../public/leftarrow.svg";
import { useState } from "react";
// import gym from "../sliderimg/gym.png"
// import gym from "../../public/gym.svg"
// import salon from "../../public/salon.svg"
import tatto from "../../public/tatto.svg"
import music from "../../public/music.svg"
import takeaway from "../../public/takeaway.svg"
import zumba from "../../public/zumba.svg"
// import bakery from "../../public/bakery.svg"
import foodcourt from "../../public/foodcourt.svg"
import dance from "../../public/dance.svg"


const images = [ tatto, takeaway, music, zumba, foodcourt, dance];
export default function SimpleSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={FaArrowRight}></img>
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={FaArrowLeft}></img>
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  var settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "100px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="w-[70%] m-auto h-[50vh]">

    <Slider {...settings}>
{images.map((img, idx) => (
  

          <div key={idx} className={` rounded-3xl h-[280px] p-[10px] sliderimgbox ${idx === imageIndex ? "slide activeSlide" : "slide"}`}>
            <img src={img} alt={img}  className={idx === 9 ? 'h-[400px] w-[400px] ' : 'h-[350px] w-[350px] pb-[40%]'} />
          </div>

        ))}
    </Slider>
    </div>
  );
}