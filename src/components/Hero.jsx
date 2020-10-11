import React, { useState, useEffect } from "react";
import { instance } from "../requests";

import styled from 'styled-components';

const StyledHero=styled.div`
  width: "100%";
  height: 90vh;
  object-fit: cover;
  background-size: cover;
  background-position: top center;
  color:#fff;
  padding-left:2rem;
  padding-bottom:2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  & div{
    margin-top:1rem;
    margin-bottom:1rem;
  }
  .hero-button{
    cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
}
.hero-button:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
}
& p{
  width:60%;
}
  @media (max-width:768px){
    & p{
     
  width:50%;
}
  }

  @media (max-width:600px){
    height: 70vh;
  }
  `

function Hero() {

  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const response = await instance.get(
        "/trending/movie/day?api_key=29b19bd86368ad87904399f5f30c6a6a"
      );

      setMovie(
        response.data.results[Math.floor(Math.random() * Math.floor(20))]
      );
    }
    fetchdata();
  }, []);

  return <StyledHero style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
  }}>
    <h1>{movie.title}</h1>
  
    <div>
    <button className="hero-button">Play</button>
    <button className="hero-button">My List</button>
  </div>
  <p>
    {movie.overview}
  </p>
  </StyledHero>;
}

export default Hero;

