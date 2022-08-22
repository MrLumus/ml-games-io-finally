import React, { useEffect } from "react";
import styled from "styled-components";

import SearchInput from "../SearchInput/SearchInput";
import SelectList from "../SelectList/SelectList";
import SelectListFilter from "../SelectListFilter/SelectListFilter";
import SearchButton from "../SearchButton/SearchButton";
import { connect } from "react-redux";
import {
  fetchPlatformsDataAC,
  setOrderDataAC,
  setPlatformDataAC,
  toggleSearchStatusAC,
  toggleSortdownDataAC,
  updateGameNameAC,
} from "../../../redux/actions";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

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

function ListContainer(props) {
  useEffect(() => {
    props.fetchPlatforms();
  }, []);

  const onGameNameTextChange = (text) => props.setGameNameText(text);
  const handelSearchClick = () => props.toggleSearchStatus();

  return (
    <ListWrapper>
      <SelectList
        items={props.sorts}
        toggleSort={props.toggleSort}
        setOrder={props.setOrder}
      />
      <SelectListFilter
        items={props.platforms}
        setPlatform={props.setPlatform}
      />
      <SearchInput
        gameNameText={props.gameNameText}
        onTextChange={onGameNameTextChange}
      />
      <SearchButton clickHandler={handelSearchClick}></SearchButton>
    </ListWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    sorts: state.gamesPage.sorts,
    platforms: state.gamesPage.platforms,
    gameNameText: state.gamesPage.gameNameText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatformsDataAC()),
    setGameNameText: (text) => dispatch(updateGameNameAC(text)),
    setOrder: (order) => dispatch(setOrderDataAC(order)),
    toggleSort: () => dispatch(toggleSortdownDataAC()),
    setPlatform: (platform) => dispatch(setPlatformDataAC(platform)),
    toggleSearchStatus: () => dispatch(toggleSearchStatusAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
