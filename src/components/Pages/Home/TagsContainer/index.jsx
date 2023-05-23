import React from "react";
const bgColors = {
  dance: "bg-green-600",
  music: "bg-blue-600",
  art: "bg-violet-600",
  other: "bg-red-600",
};

export const TagsContainer = () => {
  return (
    <div className="w-full py-2 px-6 flex justify-end gap-6 mb-6">
      {Object.keys(bgColors).map((tag) => {
        return (
          <p
            className={`${bgColors[tag]} w-20 text-center text-white cursor-pointer rounded-2xl`}
            key={tag}
          >
            {tag}
          </p>
        );
      })}
    </div>
  );
};
