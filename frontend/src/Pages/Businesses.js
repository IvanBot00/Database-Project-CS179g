import { BusinessSearchForm } from '../Forms';
import BusinessSentiment from '../components/BusinessSentiment';
import BusinessWiFi from '../components/BusinessWiFi';
import BusinessTable from '../components/BusinessTable';
import {useState} from 'react';

function Businesses() {
  const [businessData, setBusinessData] = useState([]);

  return (
    <>
      <div className='page-content'>
        <h3>Search Businesses</h3>
        <BusinessSearchForm setData={setBusinessData} />
      </div>
      <div className='page-content'>
        <BusinessTable data={businessData} />
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