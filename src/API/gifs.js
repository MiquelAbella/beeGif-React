const BASE_URL = "http://localhost:4000/gifs";
import axios from "axios";

export const getAllGifs = async () => {
  const res = await axios.get(`${BASE_URL}`);

  if (res.data.ok) {
    return res.data.gifs;
  } else {
    return null;
  }
};

export const getById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);

  if (res.data.ok) {
    return res.data.gif;
  } else {
    return null;
  }
};

export const getByTag = async (tag) => {
  const res = await axios.get(`${BASE_URL}/tag/${tag}`);

  if (res.data.ok) {
    return res.data.gifs;
  } else {
    return null;
  }
};

export const deleteGif = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);

  if (res.data.ok) {
    return true;
  } else {
    return null;
  }
};

export const addGifFromUrl = async (gifData) => {
  const res = await axios.post(`${BASE_URL}/addfromurl`, gifData);

  if (res.data.ok) {
    return res.data.gif;
  } else {
    return null;
  }
};

export const addGifFromLocal = async (gifData) => {
  const res = await axios.post(`${BASE_URL}/addfromlocal`, gifData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (res.data.ok) {
    return res.data.gif;
  } else {
    return null;
  }
};

export const searchGifs = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/${query}`);

  if (res.data.ok) {
    return res.data.gifs;
  } else {
    return null;
  }
};

export const editGif = async (id, newTitle) => {
  const res = await axios.post(`${BASE_URL}/edit`, { id, newTitle });

  if (res.data.ok) {
    return res.data.updatedGif;
  } else {
    return null;
  }
};
