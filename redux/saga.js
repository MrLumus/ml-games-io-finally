import { all } from "redux-saga/effects";
import { fetchCurrentGameObserver } from "./sagas/current-game-saga";
import { fetchGamesObserver } from "./sagas/games-saga";

export default function* rootSaga() {
  yield all([fetchGamesObserver(), fetchCurrentGameObserver()]);
}
