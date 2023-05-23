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
      <p className="mb-6 w-full text-center text-4xl text-gray-500">
        Url upload
      </p>
      <label className="text-gray-500" htmlFor="">
        
      </label>
      <input
        onChange={handleChangeGifData}
        value={gifData.title}
        name="title"
        id="title"
        type="text"
        className="w-full border border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
      />
      <label className="text-gray-500" htmlFor="url">
        Url
      </label>
      <input
        onChange={handleChangeGifData}
        value={gifData.url}
        name="url"
        id="url"
        type="text"
        className="w-full border border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
      />
      <label className="text-gray-500" htmlFor="tag">
        Tag
      </label>
      <select
        onChange={handleChangeGifData}
        name="tag"
        value={gifData.tag}
        className="w-full border border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
      >
        <option value="art">Art</option>
        <option value="music">Music</option>
        <option value="dance">Dance</option>
        <option value="other">Other</option>
      </select>
      <button className="w-full bg-cyan-600 text-white py-2 px-4 mt-6">
        Upload
      </button>
      <p
        className="w-full text-center cursor-pointer"
        onClick={() => setIsUploadingFromUrl(false)}
      >
        Do you prefer uploading from your local machine?
      </p>
    </form>
  );
};
