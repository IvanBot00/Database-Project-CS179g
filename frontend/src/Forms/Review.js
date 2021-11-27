import {
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

function Review() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Business Name</Form.Label>
            <Form.Control type='input' />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Reviewer Name</Form.Label>
            <Form.Control type='input' />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Minimum Stars</Form.Label>
            <Form.Control type='number' />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Maximum Stars</Form.Label>
            <Form.Control type='number' />
          </Form.Group>
        </Col>
      </Row>
      <div className='divider' />
      <Button variant='primary' type='submit'>
        Search
      </Button>
    </Form>
  );
}

export default Review;