import {
  Dropdown,
  Row,
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
    <div className='page-content'>
      <h2>Reviews with highest votes</h2>
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

export default User;