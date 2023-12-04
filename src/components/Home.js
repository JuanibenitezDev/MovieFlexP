import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from "../requests";

function Home() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchNowPlaying} />
      <Row RowId="1" title="Popular" fetchUrl={requests.fetchPopular} />
      <Row RowId="2" title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row RowId="3" title="Most Rated" fetchUrl={requests.fetchBestRanking} />
      <Row RowId="4" title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row RowId="5" title="Series Tv" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default Home;
