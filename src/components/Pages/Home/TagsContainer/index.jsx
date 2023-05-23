import React from "react";
import { useGifs } from "../../../../Context/GifsContext/GifsContext";
const bgColors = {
  all: "bg-yellow-600",
  dance: "bg-green-600",
  music: "bg-blue-600",
  art: "bg-violet-600",
  other: "bg-red-600",
};

export const TagsContainer = () => {
  const { getGifByTag, getAll } = useGifs();

  const searchByTag = (tag) => {
    if (tag === "all") {
      getAll();
    } else {
      getGifByTag(tag);
    }
  };

  return (
    <div className="w-full py-2 px-6 flex justify-end gap-6 mb-6">
      {Object.keys(bgColors).map((tag) => {
        return (
          <p
            className={`${bgColors[tag]} w-20 text-center text-white cursor-pointer rounded-2xl py-2 px-4 capitalize`}
            key={tag}
            onClick={() => searchByTag(tag)}
          >
            {tag}
          </p>
        );
      })}
    </div>
  );
};
