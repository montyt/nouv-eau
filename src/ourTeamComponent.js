import React from 'react';
import './nouveau.css';

function Ourteamcomponent(props) {
    return (
        <div className="profile">
            <img src={props.imgSrc} alt="avatar" className="profile_pic" />
            <div className="profile_container">
                <h2 style={{fontSize: '24px'}}>
                    {props.title}
                </h2>
                <p>
                    {props.description}  
                </p>
            </div> 
        </div>
           
    )
};

export default Ourteamcomponent;