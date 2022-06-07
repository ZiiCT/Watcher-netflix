import React from "react";
import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Main></Main>

      <Row
        rowId="1"
        title="Now Playing"
        fetchUrl={requests.requestNowPlaying}
      ></Row>

      <Row
        rowId="2"
        title="Up Coming"
        fetchUrl={requests.requestUpcoming}
      ></Row>

      <Row rowId="3" title="Popular" fetchUrl={requests.requestPopular}></Row>

      <Row rowId="4" title="Trending" fetchUrl={requests.requestTrending}></Row>

      <Row
        rowId="5"
        title="Top rated"
        fetchUrl={requests.requestTopRated}
      ></Row>
    </div>
  );
};

export default Home;
