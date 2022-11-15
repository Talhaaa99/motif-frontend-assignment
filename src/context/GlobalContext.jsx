import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  read: localStorage.getItem("read")
    ? JSON.parse(localStorage.getItem("read"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //local storage

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    localStorage.setItem("read", JSON.stringify(state.read));
  }, [state]);

  //actions

  const addEmailToFav = (currentBodyData) => {
    dispatch({ type: "ADD_EMAIL_TO_FAV", payload: currentBodyData });
  };
  const removeFromFav = (id) => {
    dispatch({ type: "REMOVE_FROM_FAV", payload: id });
  };
  const addEmailToRead = (currentBodyData) => {
    dispatch({ type: "ADD_EMAIL_TO_READ", payload: currentBodyData });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        read: state.read,
        addEmailToFav: addEmailToFav,
        removeFromFav: removeFromFav,
        addEmailToRead: addEmailToRead,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
