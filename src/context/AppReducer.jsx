export default (state, action) => {
  switch (action.type) {
    case "ADD_EMAIL_TO_FAV":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case "ADD_EMAIL_TO_READ":
      return {
        ...state,
        read: [action.payload, ...state.read],
      };
    case "REMOVE_FROM_READ":
      return {
        ...state,
        read: state.read.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
