import { Button, Modal, Form } from 'react-bootstrap/';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';

export default function ModalMovie(props) {
    

    async function handleAddFav(e, movie) {
        e.preventDefault();
        const dataToBeSent = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: movie.comment
        }
        const url = `${process.env.REACT_APP_SERVER}/addMovie`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log("handle",response.status);
        console.log(data);

    }

    const commmentRef = useRef();
    function handleComment(e) {
        e.preventDefault();
        const comment = commmentRef.current.value;
        const newmovie = { ...props.chosenMovie, comment };
        props.UpdateMovies(newmovie, props.chosenMovie.id);
    }
        return (
            <>
                <Modal show={props.show} onHide={props.ModalMoviehandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                    </Modal.Header>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + `${props.chosenMovie.poster_path}`} />

                    <Modal.Footer>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control type="text" placeholder="Enter your comment" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Button variant="danger" type="submit" onClick={handleComment}>
                                Submit
                            </Button>
                        </Form>
                        <Button variant="info" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" type="submit" onClick={(e) => { handleAddFav(e, props.chosenMovie) }}>
                            Add to Faverite
                        </Button>
                        <Button variant="danger" onClick={props.handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
