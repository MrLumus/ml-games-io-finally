import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./../redux";
import { useEffect } from "react";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;

  ::-webkit-scrollbar{
    width: 5px;
}
::-webkit-scrollbar-track{
    background: rgba(0,0,0,0);
    border-radius: 8px;
}
::-webkit-scrollbar-thumb{
    background-color: rgba(150,150,150,.6);
    border-radius: 8px;
}
}
body {
  min-height: 100vh;
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/228/640/non_2x/abstract-hexagons-black-on-a-black-and-gray-background-vector.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
