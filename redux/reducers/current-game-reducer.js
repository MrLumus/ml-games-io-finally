export const SET_CURRENT_GAME_DATA = "SET-CURRENT-GAMES-DATA";
export const SET_SCREENSHOTS_DATA = "SET-SCREENSHOTS-DATA";
export const SET_LINKS_DATA = "SET-LINKS-DATA";

const initialState = {
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
    default:
      return state;
  }
}

export default currentGameReducer;
