import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledImage=styled.img`
 object-fit: cover;
  border-radius: 0.2rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin: 1rem 0.7rem 1rem 0.7rem;
  height: 320px;
  width: 240px;

 :hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}

@media (max-width:1024px){
    height: 240px;
  width: 180px;
  }
  @media (max-width:768px){
    height: 240px;
  width: 180px;
  }
  @media (max-width:600px){
    height: 200px;
  width: 150px;
  }
  @media (max-width:380px){
    height: 150px;
  width: 100px;
  }
`


const Base = "https://image.tmdb.org/t/p/original";

function MovieThumbnail({title,poster,id}) {
  return (
    <Link to={`/movie/${id}`}>
    <StyledImage
      src={`${Base}${poster}`}
      alt={title}
    />
    </Link>
  );
}

export default MovieThumbnail;

