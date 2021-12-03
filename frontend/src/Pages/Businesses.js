import { BusinessSearchForm } from '../Forms';
import BusinessSentiment from '../components/BusinessSentiment';
import BusinessWiFi from '../components/BusinessWiFi';

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

      <br />
      <br />
      
      <div className='page-conetent' style={{height: '500px'}}>
        <h3>Comparison of business with and without WiFi</h3>
        <BusinessWiFi  />
      </div>
    </>
  );
}
export default Businesses;