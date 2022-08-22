import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const Input = styled.input`
  background-color: rgba(0, 0, 0, 0);
  font-size: 12px;
  border: 2px solid #262626;
  padding: 10px 5px;
  width: 200px;
  border-radius: 5px;
  outline: none;
  color: #868686;

  :focus {
    background-color: #333333;
  }

  @media screen and (min-width: ${size.tablet}) {
    font-size: 18px;
    width: 260px;
    padding: 13px 10px;
  }
`;

const SearchInput = ({ gameNameText, onTextChange }) => {
  const onGameNameTextChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <Input
      type="text"
      value={gameNameText}
      placeholder="Enter the name of the game..."
      onChange={onGameNameTextChange}
    ></Input>
  );
};

export default SearchInput;
