import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectList from "../components/gamesPage/SelectList/SelectList";
import SelectListFilter from "../components/gamesPage/SelectListFilter/SelectListFilter";
import Container from "../components/global/Container/Container";
import SearchButton from "../components/gamesPage/SearchButton/SearchButton";
import GamesGrid from "../components/gamesPage/GamesGrid/GamesGrid";
import SearchInput from "../components/gamesPage/SearchInput/SearchInput";
import {
  FETCH_ADDITIONAL_GAMES_DATA,
  FETCH_GAMES_DATA,
} from "../redux/sagas/games-saga";
import {
  fetchGamesDataAC,
  fetchPlatformsDataAC,
  updateGameNameAC,
} from "../redux/actions";
import Loader from "../components/global/Loader/Loader";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const GamesWrapper = styled.section`
  min-width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;
const Wrapper = styled.div`
  padding: 0px 10px;
  height: 100%;
  position: relative;
`;

const Header = styled.h1`
  color: #fff;
  text-align: center;
  padding: 20px 0;

  @media screen and (min-width: ${size.mobileL}) {
    font-size: 30px;
  }
  @media screen and (min-width: ${size.tablet}) {
    font-size: 40px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 60px;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (min-width: ${size.laptop}) {
    padding-bottom: 40px;
  }
`;

const Games = () => {
  const [isSortDown, setSort] = useState(false);
  const [order, setOrder] = useState("");
  const [platform, setPlatform] = useState("");
  const [pageNum, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [seacrhStatus, setSearchStatus] = useState(false);

  const toggleSort = () => setSort(!isSortDown);

  const gamesState = useSelector((store) => store.gamesPage);
  const isLoading = useSelector((store) => store.gamesPage.isLoading);
  const searchText = useSelector((store) => store.gamesPage.gameNameText);

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
      if (searchText) search = searchText;

      dispatch({
        type: FETCH_ADDITIONAL_GAMES_DATA,
        payload: { ordering, platforms, page, search, setPage, setFetching },
      });
    }
  }, [fetching]);

  useEffect(() => {
    setPage(1);
    dispatch(fetchPlatformsDataAC());
    dispatch(fetchGamesDataAC());
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
    if (searchText) search = searchText;

    dispatch({
      type: FETCH_GAMES_DATA,
      payload: { ordering, platforms, page, search },
    });
  }, [order, platform, isSortDown, seacrhStatus]);

  const onGameNameTextChange = (text) => {
    dispatch(updateGameNameAC(text));
  };
  const handelSearchClick = () => {
    setSearchStatus(!seacrhStatus);
  };

  return (
    <GamesWrapper>
      <Container>
        <Wrapper>
          {isLoading ? <Loader position="absolute"></Loader> : <></>}
          <Header>ML-Games IO</Header>
          <ListWrapper>
            <SelectList
              items={gamesState.sorts}
              toggleSort={toggleSort}
              setOrder={setOrder}
            />
            <SelectListFilter
              items={gamesState.platforms}
              setPlatform={setPlatform}
            />
            <SearchInput
              gameNameText={gamesState.gameNameText}
              onTextChange={onGameNameTextChange}
            />
            <SearchButton clickHandler={handelSearchClick}></SearchButton>
          </ListWrapper>
          <GamesGrid setFetching={setFetching} setPage={setPage}></GamesGrid>
        </Wrapper>
      </Container>
    </GamesWrapper>
  );
};

export default Games;
