import { useNavigate, useParams } from "react-router-dom";
import { useGifs } from "../../Context/GifsContext/GifsContext";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../../components/Loader";
import { useUser } from "../../Context/UserContext/UserContext";
import { useUI } from "../../Context/UIContext/UIContext";
import { BiCopy } from "react-icons/bi";

export const Details = () => {
  const { setMessageSuccessToaster, setMessageErrorToaster } = useUI();
  const navigate = useNavigate();
  const inputRef = useRef();
  const { id } = useParams();
  const { getGifById, deleteById, currentGif, isLoading, editTitle } =
    useGifs();
  const { user } = useUser();

  const handleCopyLink = (e) => {
    e.stopPropagation();
    console.log('here')
    navigator.clipboard.writeText(currentGif.img);
    setMessageSuccessToaster("Copied to clipboard");
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(currentGif?.title);

  const handleEdit = async () => {
    const res = await editTitle(id, newTitle);
    if (res) {
      setNewTitle(res);
      setIsEditing(false);
    }
  };

  const getGif = async () => {
    await getGifById(id);
  };

  useEffect(() => {
    getGif();
  }, []);

  const deleteGif = async () => {
    const res = await deleteById(id);
    if (res) {
      setMessageSuccessToaster("Successfuly deleted");
    } else {
      setMessageErrorToaster("Something happened, try again...");
    }
    navigate("/");
  };

  const isOwner = currentGif?.owner === user?._id;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#161519]"
      onClick={() => setIsEditing(false)}
    >
      {isLoading ? (
        <Loader />
      ) : currentGif ? (
        <div className="w-4/5 md:w-1/2 flex flex-col items-center justify-center gap-6 mt-4 relative">
          <img
            src={currentGif.url}
            className="w-full md:h-[60vh] object-cover rounded-md"
          />
          <BiCopy
            className="absolute top-4 left-2 text-white text-2xl cursor-pointer"
            onClick={handleCopyLink}
          />
          {!isEditing ? (
            <p className="text-white text-2xl">{newTitle}</p>
          ) : (
            <input
              ref={inputRef}
              className="text-2xl border-b border-white bg-transparent text-white outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          {user && isOwner ? (
            <div className="w-full flex items-center justify-end gap-6">
              {!isEditing ? (
                <>
                  <button
                    className="px-4 py-2 w-32 rounded-md border border-cyan-600 hover:bg-cyan-600 duration-200 text-white"
                    onClick={async (e) => {
                      e.stopPropagation();
                      await setIsEditing(true);
                      setNewTitle(currentGif.title);
                      inputRef.current.focus();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 w-32 rounded-md border border-red-600 hover:bg-red-600 duration-200 text-white"
                    onClick={deleteGif}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 w-32 rounded-md border border-cyan-600 hover:bg-cyan-600 duration-200 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit();
                    }}
                  >
                    Save
                  </button>
                  <button className="px-4 py-2 w-32 rounded-md border border-red-600 hover:bg-red-600 duration-200 text-white">
                    Cancel
                  </button>
                </>
              )}
            </div>
          ) : null}
        </div>
      ) : (
        <p className="text-2xl w-full truncate">
          There is not any gif with this id
        </p>
      )}
    </div>
  );
};
