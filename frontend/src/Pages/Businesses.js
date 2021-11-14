import { useState } from "react";
import axios from "axios";

function Businesses() {
  const [serverReturns, updateServerReturns] = useState([]);
  const [Address, updateAddress] = useState("");
  const [BusinessName, updateBN] = useState("");
  const [NumReviews, updateNumReviews] = useState("");
  const [NumStars, updateNumStars] = useState(0.0);


  const getData = async (e) => {
    e.preventDefault();

    console.log("requesting user data");

    let url = "http://localhost:8000/server/userSearch/";
    const request =  {
      params : {
        address : Address,
        name : BusinessName,
        review_count : NumReviews,
        stars : NumStars
      }
    }
    
    const res = await axios.get(url, request);
    console.log(res.data);
}  


  return (
    <>
      <div className='page-content'>
        <h1>Reviews of Businesses with wifi vs no wifi</h1>
      </div>
      <div className='page-content'>

      </div>
    </>
  );
}

export default Businesses;