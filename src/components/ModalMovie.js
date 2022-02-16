import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

export default function ModalMovie(props) {


    return (
        <>
            <Modal show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.choseMovie.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.poster_path}`} />
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Add Comment:</Form.Label>
                        <Form.Control type="textarea" placeholder={ "Add Your Comment Here ..😄."} />
                    </Form.Group>
                    <Button className="addBtn" variant="success" type="submit"  >
                        submit
                    </Button>
                    <Button variant="success" onClick={props.handleColse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
