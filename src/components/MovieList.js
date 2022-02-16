import React from 'react'
import Movie from './Movie';



export default function MovieList(props) {
    console.log(props);
    return (
        <>
        <h2> MovieList:</h2>
            {

                props.movies.map(element => {
                    return (
                        <>
                            <Movie key={element.id} element={element} />
                        </>

                    );
                })

            }
        </>
    );
        }