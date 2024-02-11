import Carousel from "./Carousel.jsx";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
];

export default function MainCarousel() {
  return (
    <div className={`flex justify-center py-10 h-96 w-96 3xl:w-1/2`}>
      <Carousel>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Carousel>
    </div>
  );
}
