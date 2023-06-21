import React from "react";
// import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain.png';

const logo = () =>{
    return (
        <div className="ma4 mt0" style={{height: '150px', width: '150px'}}>
            <Tilt className="Tilt br2 shadow-2" style={{height: '150px', width: '150px'}}>
            <div className="Tilt-inner">
                <img alt="brain_logo" src={brain} ></img>
            </div>
            </Tilt>
        </div>       
    )
}

// ReactDOM.render(<logo />, document.getElementById('root'));

export default logo;