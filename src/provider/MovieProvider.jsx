import { createContext, useReducer } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const initState = {
    loading: false,
    error: null,
    movies: null,
    tvShows: null,
    trendings: null,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };
      case "GETMOVIE":
        return { ...state, loading: false, movies: action.movies };
      case "GETTV":
        return { ...state, loading: false, tvShows: action.tvShows };
      case "GETTRENDING":
        return { ...state, loading: false, trendings: action.trendings };
      case "ERROR":
        return { ...state, loading: false, error: action.error };
      default:
        throw new Error(`액션오류 ${action.type}`);
    }
  }

  // api key
  const apiKey = import.meta.env.VITE_API_KEY;

  // 영화 api
  const getMovie = async () => {
    dispatch({ type: "LOADING" });

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=ko-KR`
      );
      const data = await response.json();
      const movies = data.results || []; // API 응답에서 영화 배열 추출

      dispatch({ type: "GETMOVIE", movies });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  // TV api
  const getTv = async () => {
    dispatch({ type: "LOADING" });

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&api_key=${apiKey}&language=ko-KR`
      );
      const data = await response.json();
      const tvShows = data.results || [];
      dispatch({ type: "GETTV", tvShows });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  // trending api

  const getTrending = async (tab = "all") => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/${tab}/day?language=ko-Kr&api_key=${apiKey}`
      );
      const data = await response.json();

      const trendings = data.results || [];
      dispatch({ type: "GETTRENDING", trendings });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  return (
    <MovieContext.Provider value={{ state, getMovie, getTv, getTrending }}>
      {children}
    </MovieContext.Provider>
  );
}
