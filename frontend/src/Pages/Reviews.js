import {
  Dropdown,
  Row,
} from 'react-bootstrap';

import { ReviewForm } from '../Forms';

function Reviews() {
  return (
  <>
    <div className='page-content'>
      <h1>Reviews Page</h1>
      <ReviewForm />
    </div>
    <div className='page-content'>
      <h1>Reviews with highest votes</h1>
      <p>The most 
        <Dropdown>
          <Dropdown.Toggle variant='primary'>
            blank
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item>
            useful
          </Dropdown.Item>
          <Dropdown.Item>
            funny
          </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>    
        review
      </p>
    </div>
  </>
  )
}

export default Reviews;