import Img1 from "../../../assets/Image/html.png";
import Img2 from "../../../assets/Image/css.png";
import Img3 from "../../../assets/Image/js.png";
import Img4 from "../../../assets/Image/react.png";
import Img5 from "../../../assets/Image/tailwind_css.png";
import Img6 from "../../../assets/Image/netlify.svg";
import Img7 from "../../../assets/Image/wordpress.png";
import Img8 from "../../../assets/Image/shopify.png";
import Img9 from "../../../assets/Image/photoshop.png";
import Img10 from "../../../assets/Image/illustrator.png";
import Img11 from "../../../assets/Image/indesign.png";
import Img12 from "../../../assets/Image/figma.png";

const Cards = () => {
  return (
    <>
      <div
        data-aos="fade-in"
        className={`flex justify-center gap-8 AnimationScrollingRtl`}
      >
        <img
          src={Img1}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img2}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img3}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img12}
          className={`h-24 w-24 mt-2 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img4}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img5}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img6}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img7}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img8}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img9}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img10}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
        <img
          src={Img11}
          className={`h-28 w-28 transition-transform transform hover:scale-90`}
        />
      </div>
    </>
  );
};

export default Cards;
