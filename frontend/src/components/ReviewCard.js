import { Card, Button } from 'react-bootstrap';
import ReviewModal from '../components/ReviewModal';

function ReviewCard(props) {
  return(
    <Card className="card border-primary mb-3">
      <Card.Title className="card-header d-flex justify-content-between">
        <div>{props.data.stars} Star Review - </div>
        <div>{props.votes} Votes</div>
      </Card.Title>
      <Card.Body>
        <Card.Text>
          {props.data.text.slice(0,500)}...
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <ReviewModal text={props.data.text}/>
      </Card.Footer>
    </Card>
  );
}
export default ReviewCard;