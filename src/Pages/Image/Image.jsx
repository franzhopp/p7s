import "./Styles/Image.css";

const Picture = () => {
  return (
    <>
      <section x-comp={`Picture`}>
        <div
          className={`louisaimage bg-cover bg-no-repeat lg:bg-left bg-center h-72`}
        ></div>
      </section>
      <div id="about"></div>
    </>
  );
};

export default Picture;
