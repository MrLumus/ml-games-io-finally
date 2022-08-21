import { call, put, takeEvery } from "redux-saga/effects";
import { fetchGames, fetchPlatforms } from "../api/games";
import {
  setGamesDataAC,
  setPlatformsDataAC,
  setTrueLoadingStatusAC,
  setFalseLoadingStatusAC,
  updateGamesDataAC,
  cleanupGamesData,
} from "../actions.js";

export const FETCH_GAMES_DATA = "FETCH-GAMES-DATA";
export const FETCH_ADDITIONAL_GAMES_DATA = "FETCH-ADDITION-GAMES-DATA";
export const FETCH_PLATFORMS_DATA = "FETCH-PLATFORMS-DATA";

function* fetchGamesWorker(action) {
  try {
    yield put(setTrueLoadingStatusAC());
    yield put(cleanupGamesData());
    const games = yield call(fetchGames, action.payload);
    yield put(setGamesDataAC(games.data.results));
    yield put(setFalseLoadingStatusAC());
  } catch (e) {
    console.log(e);
  }
}
function* fetchAdditionalGamesWorker(action) {
  try {
    yield put(setTrueLoadingStatusAC());
    const games = yield call(fetchGames, action.payload);
    yield action.payload.setPage(action.payload.page + 1);
    yield action.payload.setFetching(false);
    yield put(updateGamesDataAC(games.data.results));
    yield put(setFalseLoadingStatusAC());
  } catch (e) {
    console.log(e);
  }
}
function* fetchPlatformsWorker(action) {
  try {
    const platforms = yield call(fetchPlatforms, action.payload);
    yield put(setPlatformsDataAC(platforms.data.results));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchGamesObserver() {
  yield takeEvery(FETCH_GAMES_DATA, fetchGamesWorker);
  yield takeEvery(FETCH_ADDITIONAL_GAMES_DATA, fetchAdditionalGamesWorker);
  yield takeEvery(FETCH_PLATFORMS_DATA, fetchPlatformsWorker);
}
