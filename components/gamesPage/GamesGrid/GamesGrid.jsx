import styled from "styled-components";
import { useSelector } from "react-redux";
import Game from "./Game/Game";

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

const GamesGrid = ({ setFetching }) => {
  const games = useSelector((store) => store.gamesPage.games);

  const scrollListener = (e) => {
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 0) {
      setFetching(true);
    }
  };

  return (
    <Wrapper onScroll={scrollListener}>
      <Grid>
        {games.map((game) => {
          if (game.id) {
            return (
              <Game
                key={game.id}
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

export default GamesGrid;
