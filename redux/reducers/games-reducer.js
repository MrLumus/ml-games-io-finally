export const SET_GAMES_DATA = "SET-GAMES-DATA";
export const UPDATE_GAME_DATA = "UPDATE-GAME-DATA";
export const SET_PLATFORMS_DATA = "SET-PLATFORMS-DATA";
export const UPDATE_GAME_NAME_TEXT = "UPDATE-GAME-NAME-TEXT";
export const SET_TRUE_LOADING_STATUS = "SET-TRUE-LOADING-STATUS";
export const SET_FALSE_LOADING_STATUS = "SET-FALSE-LOADING-STATUS";

const initialState = {
  isLoading: false,
  gameNameText: "",
  sorts: [
    { id: 1, name: "Rate" },
    { id: 2, name: "Release Date" },
  ],
  platforms: [
    { id: 4, name: "PC" },
    { id: 21, name: "Android" },
    { id: 5, name: "macOS" },
  ],
  games: [
    {
      id: null,
      name: null,
      rating: null,
      released: null,
      background_image: null,
    },
  ],
};

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAMES_DATA:
      return {
        ...state,
        games: [...action.games],
      };
    case UPDATE_GAME_DATA:
      return {
        ...state,
        games: [...state.games, ...action.games],
      };
    case SET_PLATFORMS_DATA:
      return {
        ...state,
        platforms: action.platforms,
      };
    case UPDATE_GAME_NAME_TEXT:
      return {
        ...state,
        gameNameText: action.text,
      };
    case SET_TRUE_LOADING_STATUS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_FALSE_LOADING_STATUS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default gamesReducer;
