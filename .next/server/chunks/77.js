"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 3077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BX": () => (/* binding */ fetchCurrentGameDataAC),
/* harmony export */   "DD": () => (/* binding */ setGamesDataAC),
/* harmony export */   "Kf": () => (/* binding */ setLinksDataAC),
/* harmony export */   "Ph": () => (/* binding */ fetchScreenshotsDataAC),
/* harmony export */   "Qt": () => (/* binding */ setLoadingFalse),
/* harmony export */   "T1": () => (/* binding */ fetchLinksDataAC),
/* harmony export */   "Tq": () => (/* binding */ setCurrentGameDataAC),
/* harmony export */   "UN": () => (/* binding */ fetchGamesDataAC),
/* harmony export */   "Z_": () => (/* binding */ cleanupCurrentGameDataAC),
/* harmony export */   "_F": () => (/* binding */ updateGamesDataAC),
/* harmony export */   "i2": () => (/* binding */ updateGameNameAC),
/* harmony export */   "lL": () => (/* binding */ setPlatformsDataAC),
/* harmony export */   "nT": () => (/* binding */ cleanupGamesData),
/* harmony export */   "oS": () => (/* binding */ setFalseLoadingStatusAC),
/* harmony export */   "u6": () => (/* binding */ setTrueLoadingStatusAC),
/* harmony export */   "vJ": () => (/* binding */ setScreenshotsDataAC),
/* harmony export */   "vK": () => (/* binding */ fetchPlatformsDataAC)
/* harmony export */ });
/* unused harmony export setLoadingTrue */
/* harmony import */ var _reducers_current_game_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5758);
/* harmony import */ var _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1652);
/* harmony import */ var _sagas_current_game_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4653);
/* harmony import */ var _sagas_games_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(407);




//-------------------------- GAMES REDUCER --------------------------
function setGamesDataAC(games) {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .SET_GAMES_DATA */ .Zr,
        games: games
    };
}
function cleanupGamesData() {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .CLEANUP_GAMES_DATA */ .xS
    };
}
function updateGamesDataAC(games, page) {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .UPDATE_GAME_DATA */ .xi,
        games: games,
        page: page
    };
}
function setPlatformsDataAC(platforms) {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .SET_PLATFORMS_DATA */ .ZZ,
        platforms: platforms
    };
}
function updateGameNameAC(text) {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .UPDATE_GAME_NAME_TEXT */ .c6,
        text: text
    };
}
function setTrueLoadingStatusAC() {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .SET_TRUE_LOADING_STATUS */ .tf
    };
}
function setFalseLoadingStatusAC() {
    return {
        type: _reducers_games_reducer__WEBPACK_IMPORTED_MODULE_1__/* .SET_FALSE_LOADING_STATUS */ .lo
    };
}
// ----------------------- CURRENT GAME REDUCER ---------------------------------------
function setCurrentGameDataAC(game) {
    return {
        type: _reducers_current_game_reducer__WEBPACK_IMPORTED_MODULE_0__/* .SET_CURRENT_GAME_DATA */ .lu,
        game: game
    };
}
function setScreenshotsDataAC(screens) {
    return {
        type: _reducers_current_game_reducer__WEBPACK_IMPORTED_MODULE_0__/* .SET_SCREENSHOTS_DATA */ .It,
        screenshots: screens
    };
}
function setLinksDataAC(links) {
    return {
        type: _reducers_current_game_reducer__WEBPACK_IMPORTED_MODULE_0__/* .SET_LINKS_DATA */ .MR,
        links: links
    };
}
function cleanupCurrentGameDataAC() {
    return {
        type: _reducers_current_game_reducer__WEBPACK_IMPORTED_MODULE_0__/* .CLEANUP_CURRENT_GAME_DATA */ .p0
    };
}
function setLoadingFalse() {
    return {
        type: _reducers_current_game_reducer__WEBPACK_IMPORTED_MODULE_0__/* .SET_LOADING_FALSE */ .WD
    };
}
function setLoadingTrue() {
    return {
        type: SET_LOADING_TRUE
    };
}
// --------------------- ASYNC ACTION CREATORS -----------------------
function fetchCurrentGameDataAC(id) {
    return {
        type: _sagas_current_game_saga__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_CURRENT_GAME_DATA */ .N,
        payload: id
    };
}
function fetchLinksDataAC(id) {
    return {
        type: _sagas_current_game_saga__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_LINKS_DATA */ .Xm,
        payload: id
    };
}
function fetchScreenshotsDataAC(id) {
    return {
        type: _sagas_current_game_saga__WEBPACK_IMPORTED_MODULE_2__/* .FETCH_SCREENSHOTS_DATA */ .iF,
        payload: id
    };
}
function fetchPlatformsDataAC() {
    return {
        type: _sagas_games_saga__WEBPACK_IMPORTED_MODULE_3__/* .FETCH_PLATFORMS_DATA */ .rx,
        payload: {}
    };
}
function fetchGamesDataAC() {
    return {
        type: _sagas_games_saga__WEBPACK_IMPORTED_MODULE_3__/* .FETCH_GAMES_DATA */ .Nj,
        payload: {}
    };
}


/***/ }),

/***/ 1089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XQ": () => (/* binding */ fetchGameById),
/* harmony export */   "dw": () => (/* binding */ fetchPlatforms),
/* harmony export */   "if": () => (/* binding */ fetchGameLinks),
/* harmony export */   "kT": () => (/* binding */ fetchGames),
/* harmony export */   "tW": () => (/* binding */ fetchGameScreenshots)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function fetchGames({ page , ordering , platforms , search  }) {
    let url = "https://api.rawg.io/api/games?key=cc756ba483254278b86372f95b59dd4b";
    if (page) url += `&page=${page}`;
    if (ordering) url += `&ordering=${ordering}`;
    if (platforms) url += `&platforms=${platforms}`;
    if (search) url += `&search=${search}`;
    console.log(url);
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url);
}
function fetchPlatforms() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://api.rawg.io/api/platforms?key=cc756ba483254278b86372f95b59dd4b");
}
function fetchGameById(gameId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.rawg.io/api/games/${gameId}?key=cc756ba483254278b86372f95b59dd4b`);
}
function fetchGameScreenshots(gameId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.rawg.io/api/games/${gameId}/screenshots?key=cc756ba483254278b86372f95b59dd4b`);
}
function fetchGameLinks(gameId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.rawg.io/api/games/${gameId}/stores?key=cc756ba483254278b86372f95b59dd4b`);
}


/***/ }),

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ SET_SCREENSHOTS_DATA),
/* harmony export */   "MR": () => (/* binding */ SET_LINKS_DATA),
/* harmony export */   "WD": () => (/* binding */ SET_LOADING_FALSE),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lu": () => (/* binding */ SET_CURRENT_GAME_DATA),
/* harmony export */   "p0": () => (/* binding */ CLEANUP_CURRENT_GAME_DATA)
/* harmony export */ });
/* unused harmony export SET_LOADING_TRUE */
const SET_CURRENT_GAME_DATA = "SET-CURRENT-GAMES-DATA";
const SET_SCREENSHOTS_DATA = "SET-SCREENSHOTS-DATA";
const SET_LINKS_DATA = "SET-LINKS-DATA";
const CLEANUP_CURRENT_GAME_DATA = "CLEANUP-CURRENT-GAME-DATA";
const SET_LOADING_FALSE = "SET-LOADING-FALSE";
const SET_LOADING_TRUE = "SET-LOADING-TRUE";
const initialState = {
    isLoading: true,
    currentGame: {},
    screenshots: [],
    links: []
};
function currentGameReducer(state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_GAME_DATA:
            return {
                ...state,
                currentGame: action.game
            };
        case SET_SCREENSHOTS_DATA:
            return {
                ...state,
                screenshots: action.screenshots
            };
        case SET_LINKS_DATA:
            return {
                ...state,
                links: action.links
            };
        case CLEANUP_CURRENT_GAME_DATA:
            return initialState;
        case SET_LOADING_FALSE:
            return {
                ...state,
                isLoading: false
            };
        case SET_LOADING_TRUE:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentGameReducer);


/***/ }),

/***/ 1652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ZZ": () => (/* binding */ SET_PLATFORMS_DATA),
/* harmony export */   "Zr": () => (/* binding */ SET_GAMES_DATA),
/* harmony export */   "c6": () => (/* binding */ UPDATE_GAME_NAME_TEXT),
/* harmony export */   "lo": () => (/* binding */ SET_FALSE_LOADING_STATUS),
/* harmony export */   "tf": () => (/* binding */ SET_TRUE_LOADING_STATUS),
/* harmony export */   "xS": () => (/* binding */ CLEANUP_GAMES_DATA),
/* harmony export */   "xi": () => (/* binding */ UPDATE_GAME_DATA)
/* harmony export */ });
const SET_GAMES_DATA = "SET-GAMES-DATA";
const UPDATE_GAME_DATA = "UPDATE-GAME-DATA";
const SET_PLATFORMS_DATA = "SET-PLATFORMS-DATA";
const UPDATE_GAME_NAME_TEXT = "UPDATE-GAME-NAME-TEXT";
const SET_TRUE_LOADING_STATUS = "SET-TRUE-LOADING-STATUS";
const SET_FALSE_LOADING_STATUS = "SET-FALSE-LOADING-STATUS";
const CLEANUP_GAMES_DATA = "CLEANUP-GAMES-DATA";
const initialState = {
    isLoading: false,
    gameNameText: "",
    sorts: [
        {
            id: 1,
            name: "Rate"
        },
        {
            id: 2,
            name: "Release Date"
        }, 
    ],
    platforms: [
        {
            id: 4,
            name: "PC"
        },
        {
            id: 21,
            name: "Android"
        },
        {
            id: 5,
            name: "macOS"
        }, 
    ],
    games: [
        {
            id: null,
            name: null,
            rating: null,
            released: null,
            background_image: null
        }, 
    ]
};
function gamesReducer(state = initialState, action) {
    switch(action.type){
        case SET_GAMES_DATA:
            return {
                ...state,
                games: [
                    ...action.games
                ]
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
                        background_image: null
                    }, 
                ]
            };
        case UPDATE_GAME_DATA:
            return {
                ...state,
                games: [
                    ...state.games,
                    ...action.games
                ]
            };
        case SET_PLATFORMS_DATA:
            return {
                ...state,
                platforms: action.platforms
            };
        case UPDATE_GAME_NAME_TEXT:
            return {
                ...state,
                gameNameText: action.text
            };
        case SET_TRUE_LOADING_STATUS:
            return {
                ...state,
                isLoading: true
            };
        case SET_FALSE_LOADING_STATUS:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamesReducer);


/***/ }),

/***/ 4653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ FETCH_CURRENT_GAME_DATA),
/* harmony export */   "Xm": () => (/* binding */ FETCH_LINKS_DATA),
/* harmony export */   "iF": () => (/* binding */ FETCH_SCREENSHOTS_DATA),
/* harmony export */   "pT": () => (/* binding */ fetchCurrentGameObserver)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1089);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3077);



const FETCH_CURRENT_GAME_DATA = "FETCH-CURRENT-GAME-DATA";
const FETCH_SCREENSHOTS_DATA = "FETCH-SCREENSHOTS-DATA";
const FETCH_LINKS_DATA = "FETCH-LINKS-DATA";
function* fetchCurrentGameWorker(action) {
    try {
        const game = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_games__WEBPACK_IMPORTED_MODULE_1__/* .fetchGameById */ .XQ, action.payload);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .setCurrentGameDataAC */ .Tq)(game.data));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .setLoadingFalse */ .Qt)());
    } catch (e) {
        console.log(e);
    }
}
function* fetchGameScreenshotsWorker(action) {
    try {
        const screens = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_games__WEBPACK_IMPORTED_MODULE_1__/* .fetchGameScreenshots */ .tW, action.payload);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .setScreenshotsDataAC */ .vJ)(screens.data.results));
    } catch (e) {
        console.log(e);
    }
}
function* fetchGameLinksWorker(action) {
    try {
        const links = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_games__WEBPACK_IMPORTED_MODULE_1__/* .fetchGameLinks */ ["if"], action.payload);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_2__/* .setLinksDataAC */ .Kf)(links.data.results));
    } catch (e) {
        console.log(e);
    }
}
function* fetchCurrentGameObserver() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(FETCH_CURRENT_GAME_DATA, fetchCurrentGameWorker);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(FETCH_SCREENSHOTS_DATA, fetchGameScreenshotsWorker);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(FETCH_LINKS_DATA, fetchGameLinksWorker);
}


/***/ }),

/***/ 407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nj": () => (/* binding */ FETCH_GAMES_DATA),
/* harmony export */   "cD": () => (/* binding */ FETCH_ADDITIONAL_GAMES_DATA),
/* harmony export */   "rx": () => (/* binding */ FETCH_PLATFORMS_DATA),
/* harmony export */   "wN": () => (/* binding */ fetchGamesObserver)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1089);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3077);



const FETCH_GAMES_DATA = "FETCH-GAMES-DATA";
const FETCH_ADDITIONAL_GAMES_DATA = "FETCH-ADDITION-GAMES-DATA";
const FETCH_PLATFORMS_DATA = "FETCH-PLATFORMS-DATA";
function* fetchGamesWorker(action) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .setTrueLoadingStatusAC */ .u6)());
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .cleanupGamesData */ .nT)());
        const games = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_games__WEBPACK_IMPORTED_MODULE_1__/* .fetchGames */ .kT, action.payload);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .setGamesDataAC */ .DD)(games.data.results));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .setFalseLoadingStatusAC */ .oS)());
    } catch (e) {
        console.log(e);
    }
}
function* fetchAdditionalGamesWorker(action) {
    try {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .setTrueLoadingStatusAC */ .u6)());
        const games = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_games__WEBPACK_IMPORTED_MODULE_1__/* .fetchGames */ .kT, action.payload);
        yield action.payload.setPage(action.payload.page + 1);
        yield action.payload.setFetching(false);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .updateGamesDataAC */ ._F)(games.data.results));
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .setFalseLoadingStatusAC */ .oS)());
    } catch (e) {
        console.log(e);
    }
}
function* fetchPlatformsWorker(action) {
    try {
        const platforms = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(_api_games__WEBPACK_IMPORTED_MODULE_1__/* .fetchPlatforms */ .dw, action.payload);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .setPlatformsDataAC */ .lL)(platforms.data.results));
    } catch (e) {
        console.log(e);
    }
}
function* fetchGamesObserver() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(FETCH_GAMES_DATA, fetchGamesWorker);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(FETCH_ADDITIONAL_GAMES_DATA, fetchAdditionalGamesWorker);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(FETCH_PLATFORMS_DATA, fetchPlatformsWorker);
}


/***/ })

};
;