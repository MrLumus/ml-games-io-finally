import { useState } from "react";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const Select = styled.div`
  width: 140px;
  position: relative;
  z-index: 1;
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  :not(:last-child) {
    margin-right: 5px;
  }
  @media screen and (min-width: ${size.tablet}) {
    width: 200px;
    font-size: 18px;
  }
`;
const SelectHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #262626;
  border-radius: 5px;

  @media screen and (min-width: ${size.tablet}) {
    padding: 15px;
  }
`;
const SelectIcon = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
  width: 10px;
  height: 10px;
  border-right: 1px solid #676767;
  border-bottom: 1px solid #676767;
  border-bottom-right-radius: 3px;
  transform: rotateZ(45deg);
`;
const SelectCurrent = styled.span`
  color: #fff;
`;
const SelectBody = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  left: 0;
  right: 25px;
  top: 100%;
  background-color: #fff;
  color: #262626;
  border-radius: 5px;
  cursor: pointer;
  max-height: 200px;
  overflow: auto;
`;
const SelectItem = styled.div`
  font-size: 12px;
  padding: 10px 10px;
  transition: 0.2s;
  position: relative;
  z-index: 1;

  :first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    z-index: 2;
  }
  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;
  }
  :not(:last-child)::after {
    content: "";
    width: 50px;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    left: 10px;
    top: 100%;
  }
  :hover {
    background-color: #eee;
  }

  @media screen and (min-width: ${size.tablet}) {
    font-size: 18px;
  }
`;

const SelectListFilter = ({ setPlatform, items }) => {
  const [isOpen, setOpen] = useState(false);
  const [listText, setListText] = useState("--");

  const toggleOpen = () => setOpen(!isOpen);

  const handleItemClick = (e) => {
    setListText(e.target.innerText);
    toggleOpen();
    const platformId = e.target.getAttribute("data-id");
    setPlatform(platformId);
  };

  return (
    <Select>
      <SelectHeader onClick={toggleOpen}>
        <SelectCurrent>{listText}</SelectCurrent>
        <SelectIcon></SelectIcon>
      </SelectHeader>
      <SelectBody display={isOpen ? "inline-block" : "none"}>
        {items.map((item) => {
          return (
            <SelectItem
              key={item.id}
              data-id={item.id}
              onClick={handleItemClick}
            >
              {item.name}
            </SelectItem>
          );
        })}
      </SelectBody>
    </Select>
  );
};

export default SelectListFilter;
