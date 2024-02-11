const BtnCv = () => {
  return (
    <button
      className={`bg-8b3dff inline-flex items-center shadow-xl rounded-full gap-2 px-8 py-3 transform active:scale-75 transition-transform`}
    >
      <span
        className={`text-ffffff font-reem font-extrabold mr-1 text-xl lg:text-3xl`}
      >
        Accéder au CV
      </span>
      <svg
        className={`cursor-pointer h-10 w-10`}
        width="81"
        height="52"
        viewBox="0 0 81 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 21.5C2.51472 21.5 0.5 23.5147 0.5 26C0.5 28.4853 2.51472 30.5 5 30.5L5 21.5ZM81 26L36 0.0192375L36 51.9808L81 26ZM5 30.5L40.5 30.5V21.5L5 21.5L5 30.5Z"
          fill="#ffffff"
        />
      </svg>
    </button>
  );
};

export default BtnCv;
