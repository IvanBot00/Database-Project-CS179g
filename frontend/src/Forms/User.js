import { useState } from "react";
import axios from "axios";
import {
  Form,
  Row,
  Col,
  Button
} from 'react-bootstrap';

function User() {
  // const [request, updateRequest] = useState(false);
  const [Name, updateName] = useState('');
  const [Yelping_Since, updateYS] = useState("2000-01-01");
  const [ReviewCountMin, updateReviewCountMin] = useState(0);
  const [ReviewCountMax, updateReviewCountMax] = useState(100);
  const [UsefulMin, updateUsefulMin] = useState(0);
  const [UsefulMax, updateUsefulMax] = useState(100);
  const [FunnyMin, updateFunnyMin] = useState(0);
  const [FunnyMax, updateFunnyMax] = useState(100);
  const [CoolMin, updateCoolMin] = useState(0);
  const [CoolMax, updateCoolMax] = useState(100);

  const getData = async (e) => {
    e.preventDefault();

    console.log("requesting user data");

    let url = "http://localhost:8000/server/userSearch/";
    const request =  {
      params : {
        name : Name,
        yelping_since : Yelping_Since,
        reviewCountMin : ReviewCountMin,
        reviewCountMax : ReviewCountMax,
        usefulMin : UsefulMin,
        usefulMax : UsefulMax,
        funnyMin : FunnyMin,
        funnyMax : FunnyMax,
        coolMin : CoolMin,
        coolMax : CoolMax,
      }
    }
    
    const res = await axios.get(url, request);
    console.log(res.data);
}

  return (
    <Form onSubmit={getData}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
              value={Name}
              onChange={(e) => updateName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Profile Creation Date</Form.Label>
            <Form.Control
              type='date'
              onChange={(e) => updateYS(e.target.value.format('YYYY-MM-DD'))}
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
              onChange={(e) => updateReviewCountMin(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Reviews</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => updateReviewCountMax(e.target.value)}
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
              onChange={(e) => updateUsefulMin(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Useful</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => updateUsefulMax(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Min Funny</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => updateFunnyMin(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Funny</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => updateFunnyMax(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Min Cool</Form.Label>
            <Form.Control
              type='number'
              onChange={(e) => updateCoolMin(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Label>Max Cool</Form.Label>
          <Form.Control
            type='number'
            onChange={(e) => updateCoolMax(e.target.value)}
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