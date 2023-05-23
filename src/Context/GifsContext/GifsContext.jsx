import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import gifsReducer from "./GifsReducer";
import { useState } from "react";
import { addGifFromLocal, addGifFromUrl, deleteGif, getAllGifs, getById } from "../../API/gifs";
import { types } from "./gifsTypes";

export const GifsContext = createContext();

export const useGifs = () => {
  const state = useContext(GifsContext);
  return state;
};

const init = () => {
  const gifs = [];
  const currentGif = null;

  return {
    gifs,
    currentGif,
  };
};

export const GifsProvider = ({ children }) => {
  const [gifsState, dispatch] = useReducer(gifsReducer, {}, init);
  const [isLoading, setIsLoading] = useState(true);

  const getAll = async () => {
    setIsLoading(true);
    const res = await getAllGifs();
    if (res) {
      dispatch({ type: types.getAll, payload: res });
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getAll();
  }, []);

  const getGifById = async (id) => {
    setIsLoading(true);

    const res = await getById(id);
    if (res) {
      dispatch({ type: types.getById, payload: res });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const addUrlGif = async (gifData) => {
    const res = await addGifFromUrl(gifData);
    if (res) {
      const updatedGifs = [res, ...gifsState.gifs];
      dispatch({ type: types.addGif, payload: updatedGifs });
      return res;
    }
  };

  const addLocalGif = async (gifData) => {
    const res = await addGifFromLocal(gifData);
    if (res) {
      const updatedGifs = [res, ...gifsState.gifs];
      dispatch({ type: types.addGif, payload: updatedGifs });
      return res;
    }
  };

  const deleteById = async (id) => {
    setIsLoading(true);

    const res = await deleteGif(id);
    const filteredGifs = gifsState.gifs.filter((gif) => gif._id !== id);

    if (res) {
      dispatch({ type: types.deleteById, payload: filteredGifs });
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <GifsContext.Provider
      value={{
        ...gifsState,
        isLoading,
        getGifById,
        deleteById,
        addUrlGif,
        addLocalGif,
      }}
    >
      {children}
    </GifsContext.Provider>
  );
};

export default GifsProvider;
