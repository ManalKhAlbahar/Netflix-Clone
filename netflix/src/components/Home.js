import React, { useEffect, useState } from "react";
import MovieList from './MovieList';

export default function Home() {

    const [Movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}`)
            const data = await response.json();
            console.log(data);
            setMovies(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <h1>Home Page</h1>
                {
                    Movie && (<MovieList movie={Movie} />)
                }
         

        </>
    )
}