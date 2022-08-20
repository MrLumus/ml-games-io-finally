import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const Button = styled.button`
  margin-left: 10px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #676767;
  border-radius: 5px;
  transition: 0.2s;

  :hover {
    background-color: #565656;
    color: #262626;
  }

  @media screen and (min-width: ${size.tablet}) {
    width: 50px;
    height: 50px;
    font-weight: 600;
  }
`;

const SortButton = ({ clickHandler }) => {
  const onButtonClick = () => {
    clickHandler();
  };

  return <Button onClick={onButtonClick}>OK</Button>;
};

export default SortButton;
