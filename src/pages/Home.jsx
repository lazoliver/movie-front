import styled from "styled-components";

import MoviesHook from "../hooks/MoviesHook";

const MovieList = styled.ul`
    display: grid;
    gap: 10px
`

const MovieItem = styled.a`
    border: 1px solid #000;
    display: grid;
`

const MovieTitle = styled.h4`
    background: #000;
    color: #fff;
    padding: 10px
`

const MovieInfo = styled.p`
    color: #000;
    padding: 5px 10px
`

const Title = styled.h2`
    font-size: 22px;
    padding: 10px 0px
`

function Home() {
    const { movies, isLoading } = MoviesHook();

    return isLoading ? (
        <main>
            <div className="container">
                <Title>Carregando...</Title>
            </div>
        </main>
    ) : (
        <main>
            <div className="container">
                <Title>
                    Lista
                </Title>
                <MovieList>
                    {movies.movies.map((movie) => (
                        <MovieItem href="/" key={movie._id}>
                            <MovieTitle>{movie.title}</MovieTitle>
                            <MovieInfo>Comentário: {movie.comment}</MovieInfo>
                            <MovieInfo>Nota: {movie.rating}</MovieInfo>
                        </MovieItem>
                    ))}
                </MovieList>
            </div>
        </main>
    )
}

export default Home;