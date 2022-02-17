import React, { useEffect, useState } from "react";
import MovieList from './MovieList';

export default function Home() {

    const [movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            console.log(`url: ${process.env.REACT_APP_SERVER}/`)
            const response = await fetch(`${process.env.REACT_APP_SERVER}`)
            console.log(response);
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log("hello");
    return (
        <>
            <h1>Home Page</h1>
                {
                   movie && (<MovieList movies={movie} />)
                }
         

        </>
    )
}