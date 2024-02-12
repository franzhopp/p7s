const BtnSend = () => {
  return (
    <button
      className={`bg-8b3dff inline-flex items-center gap-2 px-8 py-3 shadow-xl rounded-full transform active:scale-75 transition-transform`}
    >
      <span
        className={`text-ffffff font-reem font-extrabold mr-2 text-xl lg:text-3xl`}
      >
        Envoyer
      </span>
      <svg
        className={`cursor-pointer h-10 w-10`}
        width="77"
        height="52"
        viewBox="0 0 77 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 21.5C2.51472 21.5 0.5 23.5147 0.5 26C0.5 28.4853 2.51472 30.5 5 30.5L5 21.5ZM77 26L32 0.0192375L32 51.9808L77 26ZM5 30.5L36.5 30.5V21.5L5 21.5L5 30.5Z"
          fill="#ffffff"
        />
      </svg>
    </button>
  );
};

export default BtnSend;
