import { initScriptLoader } from "next/script";
import { useEffect, useState, Children, cloneElement, useRef } from "react";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

const Wrapper = styled.div`
  border-radius: 15px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  @media screen and (min-width: ${size.laptop}) {
    margin-bottom: 20px;
  }
`;
const SliderWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  height: auto;
  border-radius: 15px;

  @media screen and (min-width: ${size.tablet}) {
    height: auto;
  }
`;
const SliderLine = styled.div`
  display: flex;
  max-width: 100%;
  transition: all ease 1s;
`;
const SliderButton = styled.div`
  cursor: pointer;
  position: absolute;
  border: none;
  outline: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(100, 100, 100, 0.5);
  z-index: 2;
  transition: 0.2s;

  @media screen and (min-width: ${size.laptop}) {
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: ${size.laptopL}) {
    width: 100px;
    height: 100px;
  }

  :hover {
    background-color: rgba(100, 100, 100, 0.8);
  }

  ::before {
    content: "";
    width: 10px;
    height: 10px;
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    border-bottom-left-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: ${size.laptop}) {
      width: 20px;
      height: 20px;
      border-left: 4px solid rgba(255, 255, 255, 0.5);
      border-bottom: 4px solid rgba(255, 255, 255, 0.5);
      border-bottom-left-radius: 7px;
    }
    @media screen and (min-width: ${size.laptopL}) {
      width: 30px;
      height: 30px;
      border-left: 6px solid rgba(255, 255, 255, 0.5);
      border-bottom: 6px solid rgba(255, 255, 255, 0.5);
      border-bottom-left-radius: 10px;
    }
  }

  :first-child {
    margin-right: 5px;
    left: 5px;
    @media screen and (min-width: ${size.tablet}) {
      left: 15px;
    }
    @media screen and (min-width: ${size.laptopL}) {
      left: 25px;
    }

    ::before {
      transform: translate(-40%, -50%) rotateZ(45deg);
    }
  }
  :last-child {
    margin-left: 5px;
    right: 5px;
    @media screen and (min-width: ${size.tablet}) {
      right: 15px;
    }
    @media screen and (min-width: ${size.laptopL}) {
      right: 25px;
    }

    ::before {
      transform: translate(-60%, -50%) rotateZ(-135deg);
    }
  }
`;
const Image = styled.img`
  object-fit: cover;
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;

  @media screen and (min-width: ${size.tablet}) {
    height: 400px;
  }
  @media screen and (min-width: ${size.laptop}) {
    height: 500px;
  }
  @media screen and (min-width: ${size.laptop}) {
    height: 600px;
  }
`;

const Slider = ({ screenshots }) => {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    /*setImages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minHeight: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          },
        });
      })
    );*/

    const resizeHandler = () => {
      const _width = sliderRef.current.offsetWidth;
      setWidth(_width);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    setWidth(sliderRef.current.offsetWidth);
  }, [sliderRef.current]);

  const handlerLeftArrowClick = () => {
    setOffset((prev) => {
      const newOffset = prev + width;
      if (newOffset <= 0) return newOffset;
      return prev;
    });
  };

  const handlerRightArrowClick = () => {
    setOffset((prev) => {
      const newOffset = prev - width;
      const maxOffset = width * (screenshots.length - 1) * -1;
      if (newOffset >= maxOffset) return newOffset;
      return prev;
    });
  };

  return (
    <Wrapper ref={sliderRef}>
      <SliderButton onClick={handlerLeftArrowClick}></SliderButton>

      <SliderWrapper>
        <SliderLine
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {}
          {screenshots.map((screen) => {
            return <Image key={screen.id} src={screen.image} />;
          })}
        </SliderLine>
      </SliderWrapper>

      <SliderButton onClick={handlerRightArrowClick}></SliderButton>
    </Wrapper>
  );
};

export default Slider;
