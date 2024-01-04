import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const api = "https://long-lime-gorilla-hat.cyclic.app";

const PageTitle = styled.h2`
    font-size: 20px;
`

const MovieItem = styled.div`
    border: 1px solid #000;
    border-radius: 8px;
    display: grid;
    gap: 10px;
    margin-top: 10px;
    padding-bottom: 10px
`

const MovieTitle = styled.h4`
    background: #000;
    border-radius: 8px 8px 0 0;
    color: #fff;
    padding: 10px
`

const MovieInfo = styled.p`
    color: #000;
    padding: 0px 10px
`

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getMovie = async() => {
            try {
                const response = await fetch(`${api}/movies/${id}`)
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        };
        getMovie();
    }, [id])

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
                <PageTitle>Loading...</PageTitle>
            </div>
        </main>
    ) : (
        <main>
            <div className="container">
                <PageTitle>Review</PageTitle>
                <MovieItem key={movie._id} id={movie._id}>
                    <MovieTitle key={movie._id}>{movie.title}</MovieTitle>
                    <MovieInfo>Comentário: {movie.comment}</MovieInfo>
                    <MovieInfo>Nota: {movie.rating}</MovieInfo>
                </MovieItem>
            </div>
        </main>
    )
}

export default Movie;