import BackToTopButton from "../Components/UI/ScrollToTop/BackToTopButton.jsx";
import HeaderHome from "../Components/Navigation/Header/HeaderHome";
import TitleHome from "../Components/UI/Item/Title/TitleHome";
import Picture from "../Pages/Image/Image";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Project";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Homepage = () => {
  return (
    <main className={`flex flex-1 flex-col`} id="home">
      <BackToTopButton />
      <HeaderHome />
      <div className={`bg-0d1216 h-72`}></div>
      <TitleHome />
      <Picture />
      <About id="about" />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Homepage;
