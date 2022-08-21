export const SET_CURRENT_GAME_DATA = "SET-CURRENT-GAMES-DATA";
export const SET_SCREENSHOTS_DATA = "SET-SCREENSHOTS-DATA";
export const SET_LINKS_DATA = "SET-LINKS-DATA";
export const CLEANUP_CURRENT_GAME_DATA = "CLEANUP-CURRENT-GAME-DATA";
export const SET_LOADING_FALSE = "SET-LOADING-FALSE";
export const SET_LOADING_TRUE = "SET-LOADING-TRUE";

const initialState = {
  isLoading: true,
  currentGame: {},
  screenshots: [],
  links: [],
};

function currentGameReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_GAME_DATA:
      return {
        ...state,
        currentGame: action.game,
      };
    case SET_SCREENSHOTS_DATA:
      return {
        ...state,
        screenshots: action.screenshots,
      };
    case SET_LINKS_DATA:
      return {
        ...state,
        links: action.links,
      };
    case CLEANUP_CURRENT_GAME_DATA:
      return initialState;
    case SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export default currentGameReducer;
