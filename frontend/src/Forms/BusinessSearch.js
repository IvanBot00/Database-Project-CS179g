import { Form, Row, Col, Button } from 'react-bootstrap';

function BusinessSearch() {
  return(
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Business Name</Form.Label>
          </Form.Group>
          <Form.Control
            type='input'
          />
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='input'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>State</Form.Label>
          </Form.Group>
          <Form.Control
            type='input'
          />
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='input'
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Min Stars</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Min Reviews</Form.Label>
            <Form.Control
              type='number'
            />
          </Form.Group>
        </Col>
      </Row>
      <Button type='submit' style={{marginTop: '5px'}}>
        Search
      </Button>
    </Form>
  );
}
export default BusinessSearch;