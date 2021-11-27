import { BusinessSearchForm } from '../Forms';
import BusinessSentiment from '../components/BusinessSentiment';

function Businesses() {
  return (
    <>
      <div className='page-content'>
        <h3>Search Businesses</h3>
        <BusinessSearchForm />
      </div>
      <div className='page-content' style={{height: '500px'}}>
        <h3>Sentiments for businesses by state</h3>
        <BusinessSentiment/>
      </div>
    </>
  );
}
export default Businesses;