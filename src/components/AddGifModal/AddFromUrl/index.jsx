import React, { useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";
import { useGifs } from "../../../Context/GifsContext/GifsContext";
import { useUI } from "../../../Context/UIContext/UIContext";

export const AddFromUrl = ({ setIsUploadingFromUrl }) => {
  const { setIsAddGifModalOpen } = useUI();
  const { user } = useUser();
  const { addUrlGif } = useGifs();

  const [gifData, setGifData] = useState({
    title: "",
    url: "",
    tag: "art",
    owner: user._id,
  });

  const handleChangeGifData = (e) => {
    setGifData({ ...gifData, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await addUrlGif(gifData);
    if (res) {
      setIsAddGifModalOpen(false);
    }
  };
  return (
    <form
      className="w-full h-full flex flex-col gap-4 items-start justify-center rounded-sm"
      onSubmit={handleUpload}
    >
      <p className="mb-6 w-full text-center text-6xl text-white font-bold">
        Url upload
      </p>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-white" htmlFor="title">
          Title
        </label>
        <input
          onChange={handleChangeGifData}
          value={gifData.title}
          name="title"
          id="title"
          type="text"
          className="w-full bg-transparent border-b border-white text-xl px-4 py-2 mb-2 text-white rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-white" htmlFor="url">
          Url
        </label>
        <input
          onChange={handleChangeGifData}
          value={gifData.url}
          name="url"
          id="url"
          type="text"
          className="w-full bg-transparent border-b border-white text-xl px-4 py-2 mb-2 text-white rounded-sm outline-none"
        />
      </div>
      <div className="w-full px-4 bg-white/50 rounded-md">
        <label className="text-white" htmlFor="tag">
          Tag
        </label>
        <select
          onChange={handleChangeGifData}
          name="tag"
          value={gifData.tag}
          className="w-full bg-transparent border-b border-white text-xl px-4 py-2 mb-2 text-white rounded-sm outline-none"
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
        onClick={() => setIsUploadingFromUrl(false)}
      >
        Do you prefer uploading from your local machine?
      </p>
    </form>
  );
};
