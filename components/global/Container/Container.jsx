import { useEffect, useRef } from "react";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const StyledContainer = styled.div`
  max-width: auto;
  margin: 0 auto;

  @media screen and (min-width: 321px) {
    max-width: ${size.mobileS};
  }
  @media screen and (min-width: ${size.mobileM}) {
    max-width: ${size.mobileM};
  }
  @media screen and (min-width: ${size.mobileL}) {
    max-width: ${size.mobileL};
  }
  @media screen and (min-width: ${size.tablet}) {
    max-width: ${size.tablet};
  }
  @media screen and (min-width: ${size.laptop}) {
    max-width: ${size.laptop};
  }
  @media screen and (min-width: ${size.laptopL}) {
    max-width: ${size.laptopL};
  }
`;

const Container = ({ children, setWidth }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (setWidth) {
      debugger;
      setWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return <StyledContainer ref={containerRef}>{children}</StyledContainer>;
};

export default Container;
