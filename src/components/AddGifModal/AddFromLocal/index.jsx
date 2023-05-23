import React, { useRef, useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";
import { useGifs } from "../../../Context/GifsContext/GifsContext";

export const AddFromLocal = ({ setIsUploadingFromUrl }) => {
  const { user } = useUser();
  const { addLocalGif } = useGifs();

  const formRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("owner", user._id);
    const res = await addLocalGif(formData);
    console.log(res);
  };

  return (
    <form
      encType="multipart/form-data"
      ref={formRef}
      className="w-full h-full flex flex-col gap-4 items-start justify-center rounded-sm"
      onSubmit={handleUpload}
    >
      <p className="mb-6 w-full text-center text-4xl text-gray-500">
        Local upload
      </p>
      <label className="text-gray-500" htmlFor="titleLocal">
        Title
      </label>
      <input
        name="title"
        id="titleLocal"
        type="text"
        className="w-full border border-slate-500 text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
      />
      <label className="text-gray-500" htmlFor="urlLocal">
        Url
      </label>
      <input
        name="url"
        id="urlLocal"
        type="file"
        className="w-full  text-xl px-4 py-2 text-gray-500 rounded-sm outline-none"
      />
      {previewImage ? (
        <div className="w-full flex items-center justify-center">
          <img src={previewImage} className="h-40 w-40 object-cover" />
        </div>
      ) : null}
      <label className="text-gray-500" htmlFor="tagLocal">
        Tag
      </label>
      <select
        name="tag"
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
        onClick={() => setIsUploadingFromUrl(true)}
      >
        Do you prefer uploading from a URL?
      </p>
    </form>
  );
};
