import React from "react";
import requests from "../requests";
import Footer from "./Footer";
 import Row from "./Row";
import Hero from "./Hero";

import styled from 'styled-components';
import Navbar from "./Navbar";

const StyledHomePage=styled.div`
 width: 100%;
  height: 100%;
  background-color: #111111;
  color: #ffffff;`

function HomePage() {
  return (
    <StyledHomePage>
     <Navbar />
      <Hero />
      <Row rowTitle="Trending Movies" url={requests.fetchTrendingMovie}/>
      <Row rowTitle="Top Rated Movies" url={requests.fetchToprated}/>
      <Row rowTitle="Crime Movies" url={requests.fetchCrime}/>
      <Row rowTitle="Horror Movies" url={requests.fetchHorror}/>
      <Row rowTitle="Romance Movies" url={requests.fetchRomance}/>
      <Row rowTitle="Action Movies" url={requests.fetchAction}/>
      <Row rowTitle="Comedy Movies" url={requests.fetchComedy}/>
      <Footer />
    </StyledHomePage>
  );
}

export default HomePage;
