import { useEffect, useState } from "react";
import styled from "styled-components";

const api = "https://long-lime-gorilla-hat.cyclic.app";

const MovieList = styled.ul`
    display: grid;
    gap: 10px;
    margin-top: 10px
`

const PageTitle = styled.h2`
    font-size: 20px;
`

const MovieItem = styled.a`
    border: 1px solid #000;
    border-radius: 8px;
    display: grid;
    gap: 10px;
    padding-bottom: 10px
`

const MovieTitle = styled.h4`
    background: #000;
    border-radius: 8px 8px 0 0;
    color: #fff;
    padding: 10px;
    text-transform: capitalize
`

const MovieInfo = styled.p`
    color: #000;
    padding: 0px 10px
`

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const response = await fetch(`${api}/movies`)
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        };

        fetchMovies();
    }, []);

    if (error) {
        return (
            <main>
                <div className="container">
                    <PageTitle>
                        500 - Internal Server Error
                    </PageTitle>
                </div>
            </main>
        )
    }

    return isLoading ? (
        <main>
            <div className="container">
                <PageTitle>
                    Loading...
                </PageTitle>
            </div>
        </main>
    ) : (
        <main>
            <div className="container">
                <PageTitle>
                    Todos os reviews
                </PageTitle>
                <MovieList>
                    {movies.map((movie) => (
                        <MovieItem href={`/movies/${movie._id}`} key={movie._id} id={movie._id}>
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