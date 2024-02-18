import Carousel from "./Carousel.jsx";
import IMG1 from "../../../assets/Image/Projet1.png";

const slides = [
  {
    image: IMG1,
  },
  {
    image: IMG1,
  },
];

export default function MainCarousel() {
  return (
    <div className={`flex justify-center pt-10`}>
      <Carousel autoSlide={true} autoSlideInterval={1000}>
        {slides.map((slide, index) => (
          <img key={index} src={slide.image} />
        ))}
      </Carousel>
    </div>
  );
}
