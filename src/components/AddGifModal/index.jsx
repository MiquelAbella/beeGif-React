import React, { useState } from "react";
import { useUI } from "../../Context/UIContext/UIContext";
import { useUser } from "../../Context/UserContext/UserContext";
import { AddFromUrl } from "./AddFromUrl";
import { AddFromLocal } from "./AddFromLocal";

export const AddGifModal = () => {
  const { setIsAddGifModalOpen } = useUI();
  const [isUploadingFromUrl, setIsUploadingFromUrl] = useState(true);

  return (
    <div
      className="h-screen w-screen fixed top-0 flex items-center justify-center backdrop-blur-sm z-50"
      onClick={() => setIsAddGifModalOpen(false)}
    >
      <div
        className="w-4/5 md:w-1/2 py-12 px-4   bg-[url(https://media.tenor.com/XgFebHxbC8IAAAAC/despicable-me-minions.gif)] bg-cover"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full px-4">
          {isUploadingFromUrl ? (
            <AddFromUrl setIsUploadingFromUrl={setIsUploadingFromUrl} />
          ) : (
            <AddFromLocal setIsUploadingFromUrl={setIsUploadingFromUrl} />
          )}
        </div>
      </div>
    </div>
  );
};
