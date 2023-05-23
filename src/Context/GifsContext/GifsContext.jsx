import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import gifsReducer from "./GifsReducer";
import { useState } from "react";
import {
  addGifFromLocal,
  addGifFromUrl,
  deleteGif,
  editGif,
  getAllGifs,
  getById,
  getByTag,
  searchGifs,
} from "../../API/gifs";
import { types } from "./gifsTypes";
import { useUI } from "../UIContext/UIContext";

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
  const { setMessageSuccessToaster, setMessageErrorToaster } = useUI();
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
      setMessageSuccessToaster("Successfuly uploaded");
      return res;
    } else {
      setMessageErrorToaster("Something happened... Try again...");
    }
  };

  const addLocalGif = async (gifData) => {
    const res = await addGifFromLocal(gifData);
    if (res) {
      const updatedGifs = [res, ...gifsState.gifs];
      dispatch({ type: types.addGif, payload: updatedGifs });
      setMessageSuccessToaster("Successfuly uploaded");
      return res;
    } else {
      setMessageErrorToaster("Something happened... Try again...");
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
    return res;
  };

  const getGifByTag = async (tag) => {
    setIsLoading(true);

    const res = await getByTag(tag);

    if (res) {
      dispatch({ type: types.getByTag, payload: res });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const search = async (query) => {
    const res = await searchGifs(query);

    if (res) {
      dispatch({ type: types.getAll, payload: res });
    }
  };

  const editTitle = async (id, newTitle) => {
    const res = await editGif(id, newTitle);

    if (res) {
      const updatedGifs = gifsState.gifs.map((gif) => {
        if (gif._id === id) {
          return res;
        } else {
          return gif;
        }
      });
      dispatch({ type: types.getAll, payload: updatedGifs });
      setMessageSuccessToaster("Successfuly edited");
      return res.title;
    } else {
      setMessageErrorToaster("Something happened... Try again...");
      return false;
    }
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
        getGifByTag,
        getAll,
        search,
        editTitle,
      }}
    >
      {children}
    </GifsContext.Provider>
  );
};

export default GifsProvider;
