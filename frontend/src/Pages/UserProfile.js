import { useParams } from 'react-router-dom';

function UserProfile() {
    let { id } = useParams();
    return (
        <h1>ID: {id}</h1>
    );
}
export default UserProfile;