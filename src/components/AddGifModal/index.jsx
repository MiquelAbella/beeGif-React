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
        className="w-1/2 py-12 px-4 bg-[url(https://media.tenor.com/Q0Fda6ZNcj4AAAAC/minions-scream.gif)] bg-cover"
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
