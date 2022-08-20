import { combineReducers } from "redux";
import currentGameReducer from "./reducers/current-game-reducer";
import gamesReducer from "./reducers/games-reducer";

const reducers = combineReducers({
  gamesPage: gamesReducer,
  currentGamePage: currentGameReducer,
});

export default reducers;
