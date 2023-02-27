import React from 'react';
import { useNavigate } from "react-router-dom";
import './Sync.css';



function Sync() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '/songs'; 
    navigate(path);
  }
    return (
        <div className='Main-Content flex'>
            <p>:((</p>
            <p>seems a bit empty in here..</p>
         <button className='primary-button small-bold-text' onClick={routeChange}>sync</button>
        </div>
    )
}

export default Sync;