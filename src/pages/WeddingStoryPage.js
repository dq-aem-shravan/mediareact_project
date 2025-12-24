import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeddingStoryBySlug } from "../api/weddingStoryService";
import { getMediaUrl } from "../api/mediaService";

const WeddingStoryDetail = () => {
  const { slug } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    getWeddingStoryBySlug(slug).then(setStory);
  }, [slug]);

  if (!story) return null;

  return (
    <section className="bg-[#f6f3ef] min-h-screen">
      {/* Hero */}
      <div className="h-[90vh] flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-serif">
          {story.coupleName}
        </h1>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-3 gap-4 px-6">
        {story.images.map((img, index) => (
          <img
            key={index}
            src={getMediaUrl(img.image)}
            alt=""
            className="mb-4 rounded-lg cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default WeddingStoryDetail;
