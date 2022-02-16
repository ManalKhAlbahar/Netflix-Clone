import ModalMovie from './ModalMovie';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Movies(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleShowModal(movieData) {
        console.log(movieData);
        handleShow();
        setChosenMovie(movieData)
    }
    let moe
    return (
        <>
            <h1>movies List:</h1>

            {
                props.movies.map(movie => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={movie.image} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                     Movie Overvie: {movie.overview}
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => { handleShowModal(movie) }}> Add to the favorite list</Button>
                                </Card.Body>
                            </Card>
                            {
                                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
                            }
                        </>
                    )
                })
            }

        </>
    )
}