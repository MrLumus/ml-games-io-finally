import {
  SET_CURRENT_GAME_DATA,
  SET_LINKS_DATA,
  SET_SCREENSHOTS_DATA,
} from "./reducers/current-game-reducer";
import {
  SET_FALSE_LOADING_STATUS,
  SET_GAMES_DATA,
  SET_PLATFORMS_DATA,
  SET_TRUE_LOADING_STATUS,
  UPDATE_GAME_DATA,
  UPDATE_GAME_NAME_TEXT,
} from "./reducers/games-reducer";
import {
  FETCH_CURRENT_GAME_DATA,
  FETCH_LINKS_DATA,
  FETCH_SCREENSHOTS_DATA,
} from "./sagas/current-game-saga";
import { FETCH_GAMES_DATA, FETCH_PLATFORMS_DATA } from "./sagas/games-saga";

export function setCurrentGameDataAC(game) {
  return {
    type: SET_CURRENT_GAME_DATA,
    game: game,
  };
}
export function setScreenshotsDataAC(screens) {
  return {
    type: SET_SCREENSHOTS_DATA,
    screenshots: screens,
  };
}
export function setLinksDataAC(links) {
  return {
    type: SET_LINKS_DATA,
    links: links,
  };
}
export function setGamesDataAC(games) {
  return {
    type: SET_GAMES_DATA,
    games: games,
  };
}
export function updateGamesDataAC(games, page) {
  return {
    type: UPDATE_GAME_DATA,
    games: games,
    page: page,
  };
}
export function setPlatformsDataAC(platforms) {
  return {
    type: SET_PLATFORMS_DATA,
    platforms: platforms,
  };
}

export function updateGameNameAC(text) {
  return {
    type: UPDATE_GAME_NAME_TEXT,
    text: text,
  };
}
export function setTrueLoadingStatusAC() {
  return {
    type: SET_TRUE_LOADING_STATUS,
  };
}
export function setFalseLoadingStatusAC() {
  return {
    type: SET_FALSE_LOADING_STATUS,
  };
}

// --------------------- ASYNC ACTION CREATORS -----------------------

export function fetchCurrentGameDataAC(id) {
  return {
    type: FETCH_CURRENT_GAME_DATA,
    payload: id,
  };
}
export function fetchLinksDataAC(id) {
  return {
    type: FETCH_LINKS_DATA,
    payload: id,
  };
}
export function fetchScreenshotsDataAC(id) {
  return {
    type: FETCH_SCREENSHOTS_DATA,
    payload: id,
  };
}
export function fetchPlatformsDataAC() {
  return {
    type: FETCH_PLATFORMS_DATA,
    payload: {},
  };
}
export function fetchGamesDataAC() {
  return {
    type: FETCH_GAMES_DATA,
    payload: {},
  };
}
/*dispatch({
  type: FETCH_PLATFORMS_DATA,
  payload: {},
});
dispatch({
  type: FETCH_GAMES_DATA,
  payload: {},
});*/
