import React from 'react';
import {Nav} from 'react-bootstrap'


export default function Navbar() {
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/favList">Faverite List </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )

}