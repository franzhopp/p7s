import Carousel from "./Carousel.jsx";

const slides = [
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/B3s7v4h/2.png",
];

export default function MainCarousel() {
  return (
    <div className={`flex justify-center pt-10`}>
      <Carousel autoSlide={true} autoSlideInterval={1000}>
        {slides.map((s) => (
          <img src={s} className={`h-96 w-96`} />
        ))}
      </Carousel>
    </div>
  );
}
