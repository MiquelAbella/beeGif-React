import React, { useRef, useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";
import { useGifs } from "../../../Context/GifsContext/GifsContext";
import { useUI } from "../../../Context/UIContext/UIContext";

export const AddFromLocal = ({ setIsUploadingFromUrl }) => {
  const { user } = useUser();
  const { addLocalGif } = useGifs();
  const { setIsAddGifModalOpen } = useUI();

  const formRef = useRef(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("owner", user._id);
    const res = await addLocalGif(formData);
    setIsAddGifModalOpen(false);
  };

  return (
    <form
      encType="multipart/form-data"
      ref={formRef}
      className="w-full h-full flex flex-col gap-4 items-start justify-center rounded-sm"
      onSubmit={handleUpload}
    >
      <p className="mb-6 w-full text-center text-6xl text-white font-bold">
        Local upload
      </p>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-white" htmlFor="titleLocal">
          Title
        </label>
        <input
          name="title"
          id="titleLocal"
          type="text"
          className="w-full bg-transparent border-b border-white text-xl px-4 py-2 mb-2 text-white rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-white" htmlFor="urlLocal">
          Url
        </label>
        <input
          name="url"
          id="urlLocal"
          type="file"
          className="w-full  text-xl px-4 py-2 text-white rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-white" htmlFor="tagLocal">
          Tag
        </label>
        <select
          name="tag"
          className="w-full bg-transparent border-b border-white text-white text-xl px-4 py-2 mb-2 rounded-sm outline-none"
        >
          <option className="bg-gray-400" value="art">
            Art
          </option>
          <option className="bg-gray-400" value="music">
            Music
          </option>
          <option className="bg-gray-400" value="dance">
            Dance
          </option>
          <option className="bg-gray-400" value="other">
            Other
          </option>
        </select>
      </div>
      <button className="w-full bg-cyan-600 text-white py-2 px-4 mt-6">
        Upload
      </button>
      <p
        className="cursor-pointer text-white text-lg font-bold text-center w-full"
        onClick={() => setIsUploadingFromUrl(true)}
      >
        Do you prefer uploading from a URL?
      </p>
    </form>
  );
};
