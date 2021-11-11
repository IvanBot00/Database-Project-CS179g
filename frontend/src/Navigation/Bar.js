import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Bar() {
    return (
        <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary' variant='dark'>
            <Container>
                <Nav.Item>
                    <Link to='/' className='nav-brand'>Home</Link>
                </Nav.Item>
                <Link to='/users' className='nav-link'>Users</Link>
                <Link to='/businesses' className='nav-link'>Businesses</Link>
            </Container>
        </Navbar>
    )
}

export default Bar;