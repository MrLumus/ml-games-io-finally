import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchGameById,
  fetchGameLinks,
  fetchGameScreenshots,
} from "../api/games";
import {
  setCurrentGameDataAC,
  setLinksDataAC,
  setLoadingFalse,
  setScreenshotsDataAC,
} from "../actions";

export const FETCH_CURRENT_GAME_DATA = "FETCH-CURRENT-GAME-DATA";
export const FETCH_SCREENSHOTS_DATA = "FETCH-SCREENSHOTS-DATA";
export const FETCH_LINKS_DATA = "FETCH-LINKS-DATA";

function* fetchCurrentGameWorker(action) {
  try {
    const game = yield call(fetchGameById, action.payload);
    yield put(setCurrentGameDataAC(game.data));
    yield put(setLoadingFalse());
  } catch (e) {
    console.log(e);
  }
}

function* fetchGameScreenshotsWorker(action) {
  try {
    const screens = yield call(fetchGameScreenshots, action.payload);
    yield put(setScreenshotsDataAC(screens.data.results));
  } catch (e) {
    console.log(e);
  }
}

function* fetchGameLinksWorker(action) {
  try {
    const links = yield call(fetchGameLinks, action.payload);
    yield put(setLinksDataAC(links.data.results));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchCurrentGameObserver() {
  yield takeEvery(FETCH_CURRENT_GAME_DATA, fetchCurrentGameWorker);
  yield takeEvery(FETCH_SCREENSHOTS_DATA, fetchGameScreenshotsWorker);
  yield takeEvery(FETCH_LINKS_DATA, fetchGameLinksWorker);
}
