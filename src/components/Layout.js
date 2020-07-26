import React from 'react'
import { Container } from 'react-bootstrap'

export const Layout = (props) => (
    //container is a bootstrap element that centers text and keeps it from overflowing
    <Container>
        {props.children}
    </Container>
)
