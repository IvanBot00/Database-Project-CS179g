import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import { Link } from 'react-router-dom';

function Bar() {
    return (
        <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary' variant='dark'>
            <Container>
                <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='user'>
                    <Nav.Link>Users</Nav.Link>
                </LinkContainer>
                <LinkContainer to='business'>
                    <Nav.Link>Businesses</Nav.Link>
                </LinkContainer>
            </Container>
        </Navbar>
    )
}

export default Bar;