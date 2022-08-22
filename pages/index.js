import styled from "styled-components";
import { useSelector } from "react-redux";
import Container from "../components/global/Container/Container";
import GamesGrid from "../components/gamesPage/GamesGrid/GamesGrid";
import Loader from "../components/global/Loader/Loader";
import ListContainer from "../components/gamesPage/ListContainer/ListContainer";

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

const Games = () => {
  const isLoading = useSelector((store) => store.gamesPage.isLoading);

  return (
    <GamesWrapper>
      <Container>
        <Wrapper>
          {isLoading ? <Loader position="absolute"></Loader> : <></>}
          <Header>ML-Games IO</Header>
          <ListContainer />
          <GamesGrid></GamesGrid>
        </Wrapper>
      </Container>
    </GamesWrapper>
  );
};

export default Games;
