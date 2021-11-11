import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import { UserForm } from '../Forms';

function User() {
  return (
  <>
    <div className='page-content'>
      <h1>Users Page</h1>
    </div>
    <div className='page-content'>
      <h3>Search Users</h3>
      <UserForm />
    </div>
    <div claseName='page-content'>
      <h1>Reviews By Tags and Stars</h1>
    </div>
    <div className='page-content'>
      <h2>Most Useful Reviews</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    <div className='page-content'>
      <h2>Funniest Reviews</h2>
    </div>
    <div className='page-content'>
      <h2>Coolest Reviews</h2>
    </div>
  </>
  )
}

export default User;