// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeButton from "../Components/ui/Button";
// // import WeddingStorySection from "../Components/ui/WeddingStorySection";
// const Home = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/portfolio");
//   };
  

//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/29914937/pexels-photo-29914937/free-photo-of-elegant-portrait-of-a-fashion-model-in-fur-coat.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* <div className="h-screen" />
//     <WeddingStorySection />
//     <div className="h-screen" /> */}


//       {/* Content */}
//       <div className="absolute top-1/3 left-5 md:left-16 z-10 text-white animate-slideUp">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
//           Wedmaker's Photography
//         </h1>
//         <p className="text-xl md:text-2xl mb-6">
//           Capturing the essence of life through the lens
//         </p>
//         <HomeButton Click={handleButtonClick}>Enter Site</HomeButton>
//       </div>

//       {/* Tailwind Animation */}
//       <style>
//         {`
//           @keyframes slideUp {
//             0% { opacity: 0; transform: translateY(30px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-slideUp {
//             animation: slideUp 1s ease-out forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import { getWeddingStoryPreviews } from "../api/weddingStoryService";
import WeddingStorySection from "../Components/ui/WeddingStorySection";


const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getWeddingStoryPreviews().then(setStories);
  }, []);
  

  return (
    <div>
      {stories.map((story) =>{ 
        console.log("HIII",story);
        return (<WeddingStorySection key={story.id} section={story}/>)} )}
    </div>
  );
};

export default Home;

