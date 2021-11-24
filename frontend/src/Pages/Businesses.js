import { BusinessSearchForm } from '../Forms';

function Businesses() {
  return (
    <>
      <div className='page-content'>
        <h1>Reviews of Businesses with wifi vs no wifi</h1>
      </div>
      <div className='page-content'>
        <h3>Search Businesses</h3>
        <BusinessSearchForm />
      </div>
    </>
  );
}
export default Businesses;