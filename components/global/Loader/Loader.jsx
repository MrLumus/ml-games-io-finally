import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
  z-index: 10;
`;
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;
const StyledLoader = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #aaa 80%, #0000) top / 0px 0px
      no-repeat,
    conic-gradient(#0000 30%, #aaa);
  animation: ${rotate} 2s linear infinite;
`;

const Loader = (props) => {
  return (
    <LoaderContainer {...props}>
      <StyledLoader></StyledLoader>
    </LoaderContainer>
  );
};

export default Loader;
