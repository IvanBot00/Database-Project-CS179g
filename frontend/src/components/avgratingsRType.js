import { useState } from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import "../App.css";

function AvgratingsRType() {
    const [results, updateResults] = useState(false);


    // let url = "http://cs179g-fall-2021-01.cs.ucr.edu:8888/server/avgratingsRType/"
    let url2 = "localhost:8000/server/avgratingsRType/";
    let request = "hiiiii";
    const getData = async (e) => {
        e.preventDefault();
        console.log("requesting data");
        const res = await axios.post(url2, request);
        console.log(res.data);
    }
        

    return (
        <div className="AvgRatingsTTypes">
            <Form onSubmit={getData}>
                <input type="text" className="inputbox"></input>
                <Button className = "submit" size="lg" type = "submit"> Click Here</Button>
            </Form>  
            
        </div>
    );
}

export default AvgratingsRType;