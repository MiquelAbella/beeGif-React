import { useNavigate } from "react-router-dom";

export const GifCard = ({ title, img, gifId, tag }) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/details/${gifId}`);
  };

  const bgColors = {
    dance: "bg-green-600",
    music: "bg-blue-600",
    art: "bg-violet-600",
    other: "bg-red-600"
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full cursor-pointer mt-4 relative rounded-sm"
      onClick={handleViewDetails}
    >
      <img
        className="w-full h-72 object-cover rounded-sm"
        src={img}
        loading="lazy"
      />
      <p className="py-4 text-white truncate w-4/5">{title}</p>
      <p
        className={`absolute -right-2 -top-2 p-2 rounded-3xl truncate text-white text-xs shadow-md ${bgColors[tag]}`}
      >
        {tag}
      </p>
    </div>
  );
};
