import { useEffect } from "react";
import { useState } from "react";

function MoviesHook() {
    const [ movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("https://cautious-wasp-shift.cyclic.app/movies")
                const data = await response.json();
                setMovies(data)
            } catch (error) {
                console.error("Error:", error.message)
            } finally {
                setIsLoading(false)
            }
        };

        fetchMovies();
    }, []);
    return { movies, isLoading };
}

export default MoviesHook;