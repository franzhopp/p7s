import HeaderHome from "../Components/Navigation/Header/HeaderHome";
import TitleHome from "../Components/UI/Item/Title/TitleHome";
import Picture from "../Page/Image/Image";
import About from "../Page/About/About";
import Projects from "../Page/Projects/Project";
import Contact from "../Page/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import BackToTopButton from "../Components/UI/ScrollToTop/BackToTopButton";

const Homepage = () => {
  return (
    <main className={`flex flex-1 flex-col`}>
      <HeaderHome />
      <div className={`bg-0d1216 h-72`}></div>
      <TitleHome />
      <Picture />
      <About />
      <Projects />
      <Contact />
      <BackToTopButton />
      <Footer />
    </main>
  );
};

export default Homepage;
