import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Bar() {
    return (
        <Navbar bg='primary'>
            <Container>
                <Link to='/reviews' className='nav-link'>Reviews</Link>
            </Container>
        </Navbar>
    )
}

export default Bar;