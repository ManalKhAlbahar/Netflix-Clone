import ModalMovie from './ModalMovie';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Movie.css'

export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleShowModal(data) {
        console.log(data);
        handleShow();
        setChosenMovie(data)
    }
 
    
    return (
        <>
          
            <div id="cardM">
 
                <Card id="cardid" style={{ width: '18rem' }}>
                    <Card.Img id="image" variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />

                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Button variant="danger" onClick={() => { handleShowModal(props.data) }}>Show Modal</Button>
                    </Card.Body>
                </Card>
                {
                    chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
                }

            </div>





        </>
    )

}