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
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5px;
  row-gap: 5px;

  @media screen and (min-width: ${size.tablet}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${size.laptop}) {
    font-size: 25px;
    text-align: left;
    margin-bottom: 25px;
    justify-content: flex-start;
    row-gap: 15px;
    column-gap: 10px;
  }
  @media screen and (min-width: ${size.laptopL}) {
    font-size: 35px;
  }
`;

const StoreLink = styled.a`
  color: #fff;
  border: 1px solid #fff;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  text-decoration: none;
  border-radius: 5px;
  transition: 0.2s;

  @media screen and (min-width: ${size.laptop}) {
    padding: 10px;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
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
          <Title>About</Title>
          <Description>{props.currentGame.description_raw}</Description>
          <Subtitle>Web Sites:</Subtitle>
          <Description>
            {props.links.map((link) => {
              return (
                <StoreLink
                  key={link.id}
                  href={link.url}
                >{`Link № ${counter++}`}</StoreLink>
              );
            })}
          </Description>
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
