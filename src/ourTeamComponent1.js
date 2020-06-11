import React from 'react';
import './nouveau.css';
import picture from './nouveautom.jpg';

function Ourteamcomponent1() {
    return (
        <div className="profile">
            <img src={picture} alt="avatar" className="profile_pic" />
            <div className="profile_container">
                <h2 style={{fontSize: '24px'}}>
                    Tom Peyton: CEO, Founder, & President
                </h2>
                <p>
                    Dr. Peyton received his BS in Molecular Biology and PhD in Bionucleonics from the School of Pharmacy at Purdue University. At Purdue University, Dr. Peyton worked as an Adjunct Professor of Environmental Health & Engineering. He founded American Technology Management Corporation (AmTech Consultants) in Washington DC that provided environmental, biotechnology, and health services to over 500 multinational clients including the US Congress’s Biotechnology Program.  
                </p>
            </div> 
        </div>
           
    )
};

export default Ourteamcomponent1;