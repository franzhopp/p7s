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
              <svg
                className={`cursor-pointer h-5 w-5`}
                width="52"
                height="75"
                viewBox="0 0 52 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 70C21.5 72.4853 23.5147 74.5 26 74.5C28.4853 74.5 30.5 72.4853 30.5 70H21.5ZM26 0L0.0192375 45H51.9808L26 0ZM30.5 70V40.5H21.5V70H30.5Z"
                  fill="#8B3DFF"
                />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
