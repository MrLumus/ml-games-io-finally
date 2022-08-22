export const SET_GAMES_DATA = "SET-GAMES-DATA";
export const UPDATE_GAME_DATA = "UPDATE-GAME-DATA";
export const SET_PLATFORMS_DATA = "SET-PLATFORMS-DATA";
export const UPDATE_GAME_NAME_TEXT = "UPDATE-GAME-NAME-TEXT";
export const SET_TRUE_LOADING_STATUS = "SET-TRUE-LOADING-STATUS";
export const SET_FALSE_LOADING_STATUS = "SET-FALSE-LOADING-STATUS";
export const CLEANUP_GAMES_DATA = "CLEANUP-GAMES-DATA";
export const SET_ORDER_DATA = "SET-ORDER-DATA";
export const SET_PLATFORM_DATA = "SET-PLATFORM-DATA";
export const SET_PAGE_DATA = "SET-PAGE-DATA";
export const TOGGLE_SORTDOWN_DATA = "TOGGLE-SORTDOWN-DATA";
export const SET_FETCHING_TRUE = "SET-FETCHING-TRUE";
export const SET_FETCHING_FALSE = "SET-FETCHING-FALSE";
export const SET_TRUE_SEARCH_STATUS = "SET-TRUE-SEARCH-STATUS";
export const SET_FALSE_SEARCH_STATUS = "SET-FALSE-SEARCH-STATUS";
export const TOGGLE_SEARCH_STATUS = "TOGGLE-SEARCH-STATUS";

const initialState = {
  isLoading: false,
  gameNameText: "",
  order: "",
  platform: "",
  pageNum: 1,
  isSortDown: false,
  fetching: false,
  searchStatus: false,

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
    case CLEANUP_GAMES_DATA:
      return {
        ...state,
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
    case SET_ORDER_DATA:
      return {
        ...state,
        order: action.order,
      };
    case SET_PLATFORM_DATA:
      return {
        ...state,
        platform: action.platform,
      };
    case SET_PAGE_DATA:
      return {
        ...state,
        pageNum: action.page,
      };
    case TOGGLE_SORTDOWN_DATA:
      return {
        ...state,
        isSortDown: !state.isSortDown,
      };
    case SET_FETCHING_TRUE:
      return {
        ...state,
        fetching: true,
      };
    case SET_FETCHING_FALSE:
      return {
        ...state,
        fetching: false,
      };
    case SET_TRUE_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: true,
      };
    case SET_FALSE_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: false,
      };
    case TOGGLE_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: !state.searchStatus,
      };

    default:
      return state;
  }
}

export default gamesReducer;
