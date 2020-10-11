import React, { useEffect, useState } from 'react';
 import { instance } from "../../requests";
 import styled from 'styled-components';
 import YouTube from 'react-youtube';
 import movieTrailer from "movie-trailer";

 const Base = "https://image.tmdb.org/t/p/original";

 const StyledMoviePage=styled.div`
 height:100vh;
 width:100%;
 object-fit: cover;
 background-size: cover;
 background-position: top center;
 color: #fff;
 .container {
    height:100%;
 width:100%;
 display:flex;
 align-items:center;
 padding-left:10%;
 }
 & img{
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    height: 320px;
  width: 240px;
  margin-right:2rem;
 }
 & p{
     width:60%;
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
.btn-grp{
    margin-top:1rem;
    margin-bottom:1rem;
}
@media (max-width:768px){
    .container {
    height:100%;
 width:100%;
 display:block;
 align-items:center;
 padding-top:2rem;
 padding-left:15%;
 }
  & img{
      margin-left:15%;
  }
  }
 `

const opts={
  height:"400",
  width:"100%",
  playerVars:{
    autoplay: 1,
  },
};

function MoviePage({match}) {
  const [trailerUrl,setTrailerUrl]=useState('');

    const [movie, setMovie] = useState({});
    useEffect(() => {
      async function fetchMovie() {
        const response = await instance.get(`/movie/${match.params.id}?api_key=29b19bd86368ad87904399f5f30c6a6a`);
        setMovie({...response.data});
      }
      fetchMovie();
    }, [match.params.id]);

    const handleClick=(movie)=>{
if(trailerUrl){
  setTrailerUrl("");
} else {
  movieTrailer(movie?.title || "").then(url => {
    console.log(url,"dilip");
    const urlParams =new URLSearchParams(new URL(url).search);
    setTrailerUrl(urlParams.get('v'));
  }).catch(error => console.log(error));
}
    };

    return (
        <><StyledMoviePage style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
          <div className="container"> <img src={`${Base}${movie.poster_path}`} alt={movie.title}/>
           <div>
           <h1> {movie.title}</h1>
           <div className="btn-grp">
    <button onClick={() => {handleClick(movie)}} className="hero-button">Play</button>
    <button className="hero-button">My List</button>
  </div>
            <p>{movie.overview}</p>
            </div>
            </div>
        </StyledMoviePage>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </>
    );
}

export default MoviePage

