import {
  Form,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

function User() {

  function onSubmit() {
    // <Redirect to='/search' />
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Profile Creation Date</Form.Label>
            <Form.Control
              type='date'
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Min Reviews</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Reviews</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Min Useful</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Useful</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Min Funny</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Funny</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Min Cool</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Label>Max Cool</Form.Label>
          <Form.Control
            type='number'
          />
        </Col>
      </Row>
      <div className='divider' />
      <Button type='submit'>
        Search
      </Button>
    </Form>
  );
}

export default User;