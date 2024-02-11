import SvgCopyright from "../../Components/UI/Item/Svg/CopyrightPicture.jsx";

const Picture = () => {
  return (
    <section x-comp="Picture">
      <div className="bg-gray-300 h-64">
        <div className="flex justify-start px-2 pt-52">
          <SvgCopyright />
        </div>
      </div>
    </section>
  );
};

export default Picture;
