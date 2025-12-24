import React from "react";
import { useNavigate } from "react-router-dom";

const Invalid = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1666998556439-072267ab72ae?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JlYXRpdmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")',
      }}
    >
      <div className="bg-white/20 backdrop-blur-md border border-black rounded-tl-[20%] rounded-br-[20%] p-6 md:p-10 text-center max-w-sm md:max-w-md">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          404 User Error
        </h1>
        <button
          onClick={handleClick}
          className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-semibold w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center text-lg md:text-xl"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Invalid;
