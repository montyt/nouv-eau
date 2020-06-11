import React from 'react';
import './nouveau.css';
import picture from './NouvEauSteve.jpg';

function Ourteamcomponent2() {
    return (
        <div className="profile">
            <img src={picture} alt="avatar" className="profile_pic" style={{marginTop: '-8px'}}/>
            <div className="profile_container">
                <h2 style={{fontSize: '24px'}}>
                Steve Bruhn: CPA, Chief Financial Officer
                </h2>
                <p>
                Steve has more than 30 years of corporate experience. He started at Ernst & Whitney, where he worked for seven years. He was then a tax manager for a Fortune 500 firm, where he spent 18 years until opening a private CPA practice. He has now run his business for more than 15 years and is a valuable team asset. He attended Michigan State University, where he received his BS in Accounting and his MBA in Finance.  
                </p>
            </div> 
        </div>
           
    )
};

export default Ourteamcomponent2;