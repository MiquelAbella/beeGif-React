import { useNavigate, useParams } from "react-router-dom";
import { useGifs } from "../../Context/GifsContext/GifsContext";
import { useEffect } from "react";
import { Loader } from "../../components/Loader";
import { useUser } from "../../Context/UserContext/UserContext";

export const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getGifById, deleteById, currentGif, isLoading } = useGifs();
  const { user } = useUser();

  const getGif = async () => {
    getGifById(id);
  };

  useEffect(() => {
    getGif();
  }, []);

  const deleteGif = async () => {
    await deleteById(id);
    navigate("/");
  };

  const isOwner = currentGif?.owner === user?._id;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#161519]">
      {isLoading ? (
        <Loader />
      ) : currentGif ? (
        <div className="w-1/2 flex flex-col items-center justify-center gap-6 mt-4">
          <img
            src={currentGif.url}
            className="w-full max-h-3/5 object-cover rounded-md"
          />
          <p className="text-white text-2xl">{currentGif.title}</p>
          {isOwner ? (
            <div className="w-full flex items-center justify-end gap-6">
              <button className="px-4 py-2 w-32 rounded-sm bg-cyan-600 text-white">
                Edit
              </button>
              <button
                className="px-4 py-2 w-32 rounded-sm bg-red-600 text-white"
                onClick={deleteGif}
              >
                Delete
              </button>
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
