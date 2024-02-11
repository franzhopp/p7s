import { useEffect, useState } from "react";
import { RiArrowUpFill } from "react-icons/ri";

const BackToTopButton = () => {
  const [BackToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {BackToTopButton && (
        <button>
          <div
            data-aos="fade-right"
            onClick={scrollUp}
            className="fixed bottom-8 right-5 shadow-xl rounded-full z-50"
          >
            <div
              className={`bg-ffffff p-4 h-53 h-54 rounded-full shadow-xl transform active:scale-75 transition-transform`}
            >
              <RiArrowUpFill className="h-5 w-5 text-8b3dff" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
