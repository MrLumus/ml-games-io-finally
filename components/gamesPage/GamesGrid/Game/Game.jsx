import styled from "styled-components";
import Link from "next/dist/client/link";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const GameWrapper = styled.div`
  flex: 0 0 100%;
  cursor: pointer;
  color: #ccc;
  background-color: #202020;
  overflow: hidden;
  border-radius: 15px;
  perspective: 500px;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${size.tablet}) {
    flex: 0 0 49%;
  }
  @media screen and (min-width: ${size.laptop}) {
    flex: 0 0 32%;
  }
  @media screen and (min-width: ${size.laptopL}) {
    flex: 0 0 24%;
  }
`;
const Poster = styled.div`
  height: 150px;
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: ${size.mobileL}) {
    height: 200px;
  }
`;
const GameDescription = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.p`
  max-width: 250px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
`;
const Rate = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  padding: 5px;

  ${(props) => {
    if (props.rating >= 4) {
      return (
        "border: 1px solid green;" +
        "color: green;" +
        "background-color: rgb(0, 65, 0);"
      );
    } else if (props.rating >= 3)
      return (
        "border: 1px solid yellow;" +
        "color: yellow;" +
        "background-color: rgb(65, 65, 0);"
      );
    else
      return (
        "border: 1px solid red;" +
        "color: red;" +
        "background-color: rgb(65, 0, 0);"
      );
  }};

  border-radius: 5px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Release = styled.p`
  font-size: 14px;
`;
const Description = styled.div``;

const Game = ({ name, rating, released, poster, dataHref, dataSlug }) => {
  return (
    <Link key={dataSlug} href={dataHref}>
      <GameWrapper>
        <Poster poster={poster}></Poster>
        <GameDescription>
          <Header>{name}</Header>
          <Rate rating={rating}>{rating}</Rate>
          <Release>Release: {released}</Release>
        </GameDescription>
      </GameWrapper>
    </Link>
  );
};

export default Game;
