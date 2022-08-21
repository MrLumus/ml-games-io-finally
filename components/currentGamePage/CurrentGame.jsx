import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Slider from "./Slider";
import Container from "./../global/Container/Container";
import {
  fetchCurrentGameDataAC,
  fetchLinksDataAC,
  fetchScreenshotsDataAC,
} from "../../redux/actions";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const GameWrapper = styled.div`
  height: 100%;
`;
const GameContainer = styled.div`
  padding: 0 5px;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  padding: 10px 0;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 40px;
    padding: 20px 0;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 55px;
    padding: 30px 0;
  }
  @media screen and (min-width: ${size.laptopL}) {
    font-size: 75px;
    padding: 30px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 25px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 35px;
    text-align: left;
    margin-bottom: 15px;
  }
  @media screen and (min-width: ${size.laptopL}) {
    font-size: 55px;
  }
`;

const Subtitle = styled.h3`
  font-size: 13px;
  color: #777;
  margin-bottom: 5px;
  text-align: center;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 30px;
    text-align: left;
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${size.laptopL}) {
    font-size: 45px;
  }
`;

const Description = styled.p`
  font-size: 13px;
  color: #ddd;
  text-align: center;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 25px;
    text-align: left;
    justify-content: flex-start;
    row-gap: 15px;
    column-gap: 10px;
  }
  @media screen and (min-width: ${size.laptopL}) {
    font-size: 35px;
  }
`;
const WebSiteLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.2s;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #fff;
    left: 0;
    top: 110%;
    transition: 0.2s;
  }
  :hover::after {
    width: 100%;
  }
`;
const StoreLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5px;
  row-gap: 5px;

  @media screen and (min-width: ${size.tablet}) {
    row-gap: 10px;
    column-gap: 10px;
  }
  @media screen and (min-width: ${size.laptop}) {
    row-gap: 15px;
    column-gap: 15px;
  }
`;
const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 5px;
  column-gap: 5px;

  @media screen and (min-width: ${size.laptop}) {
    justify-content: flex-start;
  }
`;
const Genre = styled.div`
  font-size: 10px;
  padding: 5px;
  color: #fff;
  background-color: #555;
  text-align: center;
  border-radius: 10px;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 15px;
    padding: 10px;
    border-radius: 20px;
  }

  @media screen and (min-width: ${size.laptop}) {
    font-size: 25px;
    padding: 15px;
    border-radius: 30px;
  }
`;
const StoreLink = styled.a`
  font-size: 10px;
  color: #fff;
  border: 1px solid #bbb;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  border-radius: 15px;
  transition: 0.2s;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 15px;
    padding: 10px;
    border-radius: 20px;
  }
  @media screen and (min-width: ${size.laptop}) {
    padding: 10px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 25px;
    padding: 15px;
    border-radius: 30px;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
const ScoreContainer = styled.div`
  padding: 10px;
  position: relative;
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${size.tablet}) {
    padding: 20px;
  }
  @media screen and (min-width: ${size.laptop}) {
    flex: 0 0 50%;
  }

  :not(:last-child)::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.3);
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: ${size.tablet}) {
      width: 30%;
    }
    @media screen and (min-width: ${size.laptop}) {
      display: none;
    }
  }
`;
const ScoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CurrentGame = (props) => {
  const router = useRouter();

  let counter = 1;
  const { id } = router.query;

  useEffect(() => {
    props.fecthCurrentGameData(id);
    props.fetchLinksData(id);
    props.fetchScreenshotsData(id);
  }, [id]);

  return (
    <GameWrapper>
      <Container>
        <GameContainer>
          <Header>{props.currentGame.name}</Header>
          <Slider screenshots={props.screenshots} />

          <ScoreContainer>
            <Title>About</Title>
            <Description>{props.currentGame.description_raw}</Description>
          </ScoreContainer>

          <ScoresContainer>
            <ScoreContainer>
              <Subtitle>Genres:</Subtitle>
              <GenresContainer>
                {props.currentGame.genres ? (
                  props.currentGame.genres.map((genre) => {
                    return <Genre key={genre.id}>{genre.name}</Genre>;
                  })
                ) : (
                  <></>
                )}
              </GenresContainer>
            </ScoreContainer>

            <ScoreContainer>
              <Subtitle>Date of release:</Subtitle>
              <Description>{props.currentGame.released}</Description>
            </ScoreContainer>

            <ScoreContainer>
              <Subtitle>Rating / Metacritic</Subtitle>
              <Description>
                {props.currentGame.rating} / {props.currentGame.metacritic}
              </Description>
            </ScoreContainer>

            <ScoreContainer>
              <Subtitle>Web site:</Subtitle>
              <Description>
                <WebSiteLink href={props.currentGame.website}>
                  {props.currentGame.website}
                </WebSiteLink>
              </Description>
            </ScoreContainer>

            <ScoreContainer>
              <Subtitle>Stores:</Subtitle>
              <StoreLinksContainer>
                {props.links ? (
                  props.links.map((link) => {
                    return (
                      <StoreLink
                        key={link.id}
                        href={link.url}
                      >{`Link № ${counter++}`}</StoreLink>
                    );
                  })
                ) : (
                  <></>
                )}
              </StoreLinksContainer>
            </ScoreContainer>
          </ScoresContainer>
        </GameContainer>
      </Container>
    </GameWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentGame: state.currentGamePage.currentGame,
    links: state.currentGamePage.links,
    screenshots: state.currentGamePage.screenshots,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fecthCurrentGameData: (id) => dispatch(fetchCurrentGameDataAC(id)),
    fetchLinksData: (id) => dispatch(fetchLinksDataAC(id)),
    fetchScreenshotsData: (id) => dispatch(fetchScreenshotsDataAC(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);
