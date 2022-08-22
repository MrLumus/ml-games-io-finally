import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import Game from "./Game/Game";
import {
  fetchGamesDataAC,
  setFetchingTrueAC,
  setPageDataAC,
} from "../../../redux/actions";
import {
  FETCH_ADDITIONAL_GAMES_DATA,
  FETCH_GAMES_DATA,
} from "../../../redux/sagas/games-saga";
import { useEffect } from "react";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: ${size.tablet}) {
    column-gap: calc(2% - 4px);
  }
  @media screen and (min-width: ${size.laptop}) {
    column-gap: calc(2% - 4px);
  }
  @media screen and (min-width: ${size.laptopL}) {
    column-gap: calc((100% - 24% * 4) / 3 - 2px);
  }
`;

const Wrapper = styled.div`
  max-height: calc(100vh - 68px - 99px);
  overflow: auto;
  position: relative;
  z-index: 0;

  @media screen and (min-width: ${size.mobileL}) {
    font-size: 25px;
    max-height: calc(100vh - 74px - 98px);
  }
  @media screen and (min-width: ${size.tablet}) {
    max-height: calc(100vh - 71px - 85px);
  }
  @media screen and (min-width: ${size.laptop}) {
    max-height: calc(100vh - 91px - 109px);
  }
`;

const GamesGrid = ({
  games,
  order,
  platform,
  pageNum,
  gameNameText,
  searchStatus,
  fetching,
  isSortDown,
  isLoading,
  setFetchingTrue,
  setPage,
  fetchGamesData,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      let ordering = "";
      let platforms = "";
      let page = "";
      let search = "";

      if (order) {
        switch (order) {
          case "1":
            ordering = isSortDown ? "rating" : "-rating";
            break;
          case "2":
            ordering = isSortDown ? "released" : "-released";
            break;
        }
      }

      if (platform) platforms = platform;
      if (pageNum) page = pageNum;
      if (gameNameText) search = gameNameText;

      dispatch({
        type: FETCH_ADDITIONAL_GAMES_DATA,
        payload: {
          ordering,
          platforms,
          page,
          search,
        },
      });
    }
  }, [fetching]);

  useEffect(() => {
    setPage(1);
    fetchGamesData();
  }, []);

  useEffect(() => {
    setPage(1);
    let ordering = "";
    let platforms = "";
    let page = "";
    let search = "";
    if (order) {
      switch (order) {
        case "1":
          ordering = isSortDown ? "rating" : "-rating";
          break;
        case "2":
          ordering = isSortDown ? "released" : "-released";
          break;
      }
    }

    if (platform) platforms = platform;
    if (pageNum) page = pageNum;
    if (gameNameText) search = gameNameText;

    dispatch({
      type: FETCH_GAMES_DATA,
      payload: { ordering, platforms, page, search },
    });
  }, [order, platform, isSortDown, searchStatus]);

  const scrollListener = (e) => {
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 0) {
      setFetchingTrue();
    }
  };

  return (
    <Wrapper onScroll={scrollListener}>
      <Grid>
        {games.map((game, index) => {
          if (game.id) {
            return (
              <Game
                key={index}
                dataId={game.id}
                dataSlug={game.slug}
                dataHref={`/games/${game.slug}/${game.id}`}
                name={game.name}
                rating={game.rating}
                released={game.released}
                poster={game.background_image}
              />
            );
          }
        })}
      </Grid>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.gamesPage.order,
    platform: state.gamesPage.platform,
    pageNum: state.gamesPage.pageNum,
    isSortDown: state.gamesPage.isSortDown,
    fetching: state.gamesPage.fetching,
    searchStatus: state.gamesPage.searchStatus,
    gameNameText: state.gamesPage.gameNameText,
    games: state.gamesPage.games,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGamesData: () => dispatch(fetchGamesDataAC()),
    setFetchingTrue: () => dispatch(setFetchingTrueAC()),
    setPage: (page) => dispatch(setPageDataAC(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesGrid);
