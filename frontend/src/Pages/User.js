import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { UserForm } from '../Forms';
import UserTable from '../components/UserTable';
import ReviewCard from '../components/ReviewCard';

import usefulData from './data/useful.json';
import funnyData from './data/funny.json';
import coolData from './data/cool.json';

function User() {
  const [userData, setUserData] = useState([]);

  return (
  <>
    <div className='page-content'>
      <h1>Users Page</h1>
    </div>
    <div className='page-content'>
      <h3>Search Users</h3>
      <UserForm setData={setUserData} />
    </div>
    <div className='page-content'>
      <UserTable data={userData}/>
    </div>
    <div claseName='page-content'>
      <h1>Reviews By Tags and Stars</h1>
    </div>
    <div className='page-content'>
      <h2>Most Useful Reviews</h2>
      {usefulData.map((review) => (
        <Row>
          <ReviewCard key={review.review_id} data={review} votes={review.useful}/>
        </Row>
      ))}
    </div>
    <div className='page-content'>
      <h2>Funniest Reviews</h2>
      {funnyData.map((review) => (
        <Row>
          <ReviewCard key={review.review_id} data={review} votes={review.funny}/>
        </Row>
      ))}
    </div>
    <div className='page-content'>
      <h2>Coolest Reviews</h2>
      {coolData.map((review) => (
        <Row>
          <ReviewCard key={review.review_id} data={review} votes={review.cool}/>
        </Row>
      ))}
    </div>
  </>
  )
}
export default User;