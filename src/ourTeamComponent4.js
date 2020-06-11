import React from 'react';
import './nouveau.css';
import picture from './NouvEauAmanda.jpg';

function Ourteamcomponent4() {
    return (
        <div className="profile">
            <img src={picture} alt="avatar" className="profile_pic" style={{marginTop: '-8px'}}/>
            <div className="profile_container">
                <h2 style={{fontSize: '24px'}}>
                Amanda Rumba: Executive Officer & Corporate Secretary
                </h2>
                <p>
                Amanda brings our team together. She has 10 years of experience working in a variety of community and business services. She earned a Master’s degree in history from the University of Chicago, and her Bachelor’s degree in history from Mercyhurst College. While teaching at the college level, she is also pursuing her PhD in history.  
                </p>
            </div> 
        </div>
           
    )
};

export default Ourteamcomponent4;