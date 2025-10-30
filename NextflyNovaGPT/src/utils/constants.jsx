export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hi",
    name: "hindi",
  },
  {
    identifier: "spanish",
    name: "spanish",
  },
  {
    identifier: "french",
    name: "french",
  },
  {
    identifier: "german",
    name: "german",
  },
];

export const OPEN_KEY = import.meta.env.VITE_OPEN_KEY;
