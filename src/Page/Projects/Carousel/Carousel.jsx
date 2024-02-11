import { useState } from "react";

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className={`relative overflow-hidden rounded-xl shadow-xl`}>
      <div
        className={`flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className={`flex items-center justify-between absolute inset-0 p-4`}>
        <button x-comp={`BtnLeft`}>
          <div>
            <div
              onClick={prev}
              className={`bg-ffffff p-4 h-53 h-54 rounded-full transform active:scale-75 transition-transform`}
            >
              <svg
                className={`cursor-pointer rotate-180 h-5 w-5`}
                width="77"
                height="52"
                viewBox="0 0 77 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21.5C2.51472 21.5 0.5 23.5147 0.5 26C0.5 28.4853 2.51472 30.5 5 30.5L5 21.5ZM77 26L32 0.0192375L32 51.9808L77 26ZM5 30.5L36.5 30.5V21.5L5 21.5L5 30.5Z"
                  fill="#8B3DFF"
                />
              </svg>
            </div>
          </div>
        </button>
        <button x-comp={`BtnRight`}>
          <div>
            <div
              className={`bg-ffffff p-4 h-53 h-54 rounded-full transform active:scale-75 transition-transform`}
            >
              <svg
                onClick={next}
                className={`cursor-pointer rotate-0 h-5 w-5`}
                width="77"
                height="52"
                viewBox="0 0 77 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21.5C2.51472 21.5 0.5 23.5147 0.5 26C0.5 28.4853 2.51472 30.5 5 30.5L5 21.5ZM77 26L32 0.0192375L32 51.9808L77 26ZM5 30.5L36.5 30.5V21.5L5 21.5L5 30.5Z"
                  fill="#8B3DFF"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}