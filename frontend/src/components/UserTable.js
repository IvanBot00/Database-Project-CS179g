import { Table } from 'react-bootstrap';

function UserTable(props) {
  const users = props.data;
  return(
    <Table>
      <thead>
        <tr>
          <td>User</td>
          <td>Review Count</td>
          <td>Registered</td>
          <td>Elite</td>
          <td>Useful</td>
          <td>Cool</td>
          <td>Funny</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.user_id}>
            <td>{user.name}</td>
            <td>{user.review_count}</td>
            <td>{user.yelping_since}</td>
            <td>{user.elite}</td>
            <td>{user.useful}</td>
            <td>{user.cool}</td>
            <td>{user.funny}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default UserTable;