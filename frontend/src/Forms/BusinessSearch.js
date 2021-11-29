import { Form, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function BusinessSearch(props) {
  const [Name, updateName] = useState('');
  const [City, updateCity] = useState("");
  const [State, updateState] = useState("");
  const [PostalCode, updatePostalCode] = useState(-1);
  const [MinStars, updateMinStars] = useState(0);
  const [MinReviews, updateMinReviews] = useState(0);

  const getData = async (e) => {
    e.preventDefault();

    console.log("requesting business data");

    let url = "http://cs179g-fall-2021-01.cs.ucr.edu:8080/server/businessSearch/";
    const request =  {
      params : {
        name : Name,
        city : City,
        state : State,
        postal_code : PostalCode,
        MinimumStars : MinStars,
        MinimumReviews : MinReviews
      }
    }
    
    const res = await axios.get(url, request);
    console.log(res.data);
    // props.setData(res.data);
}
  return(
    <Form onSubmit={getData}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Business Name</Form.Label>
          </Form.Group>
          <Form.Control
            type='input'
            value={Name}
            onChange={(e) => updateName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='input'
              value={City}
              onChange={(e) => updateCity(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>State</Form.Label>
          </Form.Group>
          <Form.Control
            type='input'
            value={State}
            onChange={(e) => updateState(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='input'
              value={PostalCode}
              onChange={(e) => updatePostalCode(e.target.value)}
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
              value={MinStars}
              onChange={(e) => updateMinStars(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Min Reviews</Form.Label>
            <Form.Control
              type='number'
              value={MinReviews}
              onChange={(e) => updateMinReviews(e.target.value)}
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