import { useEffect, useState } from "react";
import { getWeddingStoryPreviews } from "../api/weddingStoryService";
import WeddingStorySection from "../Components/ui/WeddingStorySection";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";


const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getWeddingStoryPreviews().then(setStories);
  }, []);
  

  return (
    <div>
      <Navbar />
      {stories.map((story) =>{ 
        console.log("HIII",story);
        return (<WeddingStorySection key={story.id} section={story}/>)} )}

      <Footer/>  
    </div>
  );
};

export default Home;

