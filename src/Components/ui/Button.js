import React from "react";

const HomeButton = ({ Click, children }) => {
  return (
    <button
      onClick={Click}
      className="
        relative w-[165px] h-[62px]
        rounded-2xl text-white text-[17px]
        bg-[#100720]
        transition duration-150
        active:scale-90 active:rotate-3
        overflow-hidden
      "
    >
      {/* Glow Effect */}
      <span
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_farthest-corner_at_10%_20%,rgba(255,94,247,1)_17.8%,rgba(2,245,255,1)_100.2%)]
          blur-xl
        "
      />

      {children}
    </button>
  );
};

export default HomeButton;
