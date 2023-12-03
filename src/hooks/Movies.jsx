import { useEffect, useState } from "react";
import styled from "styled-components";

const MovieItem = styled.a`
  border: 1px solid #000;
  color: #000;
  display: grid;
  text-decoration: none;
`;

const MovieTitle = styled.h3`
  background: #000;
  color: #fff;
  padding: 10px;
`;

const MovieInfo = styled.p`
  padding: 5px 10px;
`;

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    await fetch("https://cautious-wasp-shift.cyclic.app/movies")
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      });
  }

  return isLoading ? (
    <>
      <p>Loading...</p>
    </>
  ) : (
    <>
      {movies.movies.map((movie) => {
        return (
          <MovieItem href={`/movies/${movie._id}`} key={movie._id}>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieInfo>Comentário: {movie.comment}</MovieInfo>
            <MovieInfo>Nota: {movie.rating}</MovieInfo>
          </MovieItem>
        );
      })}
    </>
  );
}

export default Movies;
