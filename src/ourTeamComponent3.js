import React from 'react';
import './nouveau.css';
import picture from './NouvEauJulie.jpg';

function Ourteamcomponent3() {
    return (
        <div className="profile">
            <img src={picture} alt="avatar" className="profile_pic" style={{width: '135px', marginRight: '15px', marginTop: '-8px'}} />
            <div className="profile_container">
                <h2 style={{fontSize: '24px'}}>
                Julie Ginn: Vice President
                </h2>
                <p>
                Julie has been in commercial property investment financing since 1992. She has first-hand experience in all facets of owning and managing real estate and cash-flow management on multiple fronts. In addition to her development vision, Julie has excelled at creativity, and she offers innovative solutions to challenging situations. Julie is on the board of Building Concepts of Indiana and is a Licensed Real Estate Broker.  
                </p>
            </div> 
        </div>
           
    )
};

export default Ourteamcomponent3;