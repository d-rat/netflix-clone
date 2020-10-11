import React, { useEffect, useState } from "react";
import { instance } from "../requests";
import MovieThumbnail from "./MovieThumbnail";
import styled from 'styled-components';

const StyledRow=styled.div`
margin-left:1rem;
margin-top:1rem;
.row-thumbnails {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1rem;
}
.row-thumbnails::-webkit-scrollbar {
  display: none;
}
`



function Row({ url, rowTitle }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const response = await instance.get(url);

      setMovies([...response.data.results]);
    }
    fetchdata();
  }, [url]);

  return (
    <StyledRow>
      <h1>
        {rowTitle}
      </h1>
      <div className="row-thumbnails">
        {movies.map((movie) => (
          <MovieThumbnail key={movie.id} title={movie.title} poster={movie.poster_path} id={movie.id}/>
        ))}
      </div>
    </StyledRow>
  );
}

export default Row;
