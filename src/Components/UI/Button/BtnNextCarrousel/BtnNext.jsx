const BtnNext = () => {
  return (
    <button className="bg-ffffff inline-flex items-center rotate-90 gap-2 px-8 py-3 shadow-2xl rounded-full transform active:scale-75 transition-transform">
      <span className="font-extrabold font-reem text-8b3dff text-4xl mr-4">
        Next
      </span>
      <svg
        className="rotate-90 cursor-pointer"
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
    </button>
  );
};

export default BtnNext;
