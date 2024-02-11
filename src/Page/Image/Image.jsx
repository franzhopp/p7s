import SvgCopyright from "../../Components/UI/Item/Svg/CopyrightPicture.jsx";
import "./Image.css";

const Picture = () => {
  return (
    <section x-comp={`Picture`}>
      <div
        className={`louisaimage bg-cover bg-no-repeat lg:bg-left bg-center h-64`}
      >
        <div className={`flex justify-start px-2 pt-52`}>
          <SvgCopyright />
        </div>
      </div>
    </section>
  );
};

export default Picture;
