import { getMediaUrl } from "../../api/mediaService";

const MasonryGrid = ({ media }) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {media.map(item => (
        <img
          key={item.id}
          src={getMediaUrl(item.id)}
          className="mb-4 w-full rounded-sm cursor-pointer hover:scale-[1.02] transition"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default MasonryGrid;
