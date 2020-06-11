import React from 'react';
import ReactDOM from 'react-dom';
import './nouveau.css';
import logo from './newVowlogo.png';
import WHB from './whiteTrim.jpg';
import winePour from './wine_pouring.jpg';
import fallvinyard from './fallvinyard.jpeg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ourteamcomponent1 from './ourTeamComponent1';
import Ourteamcomponent2 from './OurTeamComponent2';
import Ourteamcomponent3 from './ourTeamComponent3';
import Ourteamcomponent4 from './ourTeamComponent4';
import Timeline from './Timeline';
import './contactForm.php';

function mailto () {
   window.location.href = "mailto:montytruitt@gmail.com";
};
 
const App = () => {
   return (
       <div>
            <div className="header_container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="contact_button_container">
                    <button type="button" className="contact_button" onClick={mailto}>Contact Us</button>
                </div>
            </div>
            <div style={{zIndex: '1000'}}>
            <section class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">
                     Wine Health Boost
                    </h1>
     
                     <h2 class="hero-subtitle">
                       Enjoy The Upside of Wine
                     </h2>
                </div>
            </section>
            </div>
            <div className="menu_container">
                <li><a href="#our_story_page">Our Story</a></li>
                <li><a href="#our_product_page">Our Product</a></li>
                <li><a href="#our_team_page">Our Team</a></li>
                <li><a href="#get_in_touch_page">Get In Touch</a></li>
            </div>
            <div className="story">
                <a id="our_story_page">
                    Our Story
                </a>
            </div>
            <div className="timeline_container">
               <Timeline />
            </div>
            <br />
            <div className="ourTeam1">
                <a id="our_product_page">
                    Our Product
                </a>
            </div>
            <div className="ourProduct">
                <a href="https://www.youtube.com/watch?v=IwVP4KEhGRI&t=5s">
                    <img src={WHB} alt="vinyard in the fall" />
                </a>
                <div className="product_container">
                    <h2> 
                        Wine Health Boost
                    </h2>
                    <p>
                    Wine Health Boost is the perfect way to achieve all the benefits of red wine without the alcohol and heavy calorie load. Made from whole red wine reduction of vineyard select fermented red grades for better bioavailability and a broad spectrum of the powerful polyphenolic antioxidants needed for all of red wine's non-alcoholic benefits, fifty milliliters or 1.69 fluid ounces of our proprietary wine health mixture equals 10 glasses of red wine. All this benefit is packaged in a pocket-size bottle to use at your convenience in any beverage, morning, noon or night for immediate and long term health maintenance.
                    </p>
                </div>
            </div>
            <div className="theBenefits">
                <img src={winePour} alt="vinyard in the fall"  />
                <div className="benefits_container" >
                    <h2>
                        The Benefits
                    </h2>
                    <p>
                    Mediterraneans who drink 1-2 glasses of Red Wine per day as part of their diet live over 5 years longer due to the heart benefits of the fermented grape polyphenols. One to two glasses a day are recommended by physicians for heart health. A concentrate of the fermented polyphenolic extract of Red Wine without the alcohol from whole wine reduction is formulated with proprietary patent pending ingredients.
                    </p>
                </div>
            </div>
            <div className="quickFacts">
                <img src={fallvinyard} alt="vinyard in the fall"/>
                <div className="facts_container" >
                    <h2> 
                     Quick Facts
                    </h2>
                    <p>
                    <li>30 to 1 Wine Concentrate</li>
                    <li>Zero Alcohol</li>
                    <li>12 Calories</li>
                    <li>Longevity</li>
                    <li>All Natural Wine (Antioxidants and Polyphenols)</li>
                    </p>
                </div>
            </div>
            <div className="ourTeam2">
                <a id="our_team_page">
                    Our Team
                </a>
            </div>
            <div style={{paddingTop: '36px'}}>
                <Ourteamcomponent1 />
            </div>
            <br/>
            <Ourteamcomponent2 />
            <br/>
            <Ourteamcomponent3 />
            <div style={{paddingTop: '18px', paddingBottom: '36px'}}>
                <Ourteamcomponent4 />
            </div>
            <div className="getInTouch">
                <a id="get_in_touch_page">
                    Get In Touch
                </a>
            </div>
            <div>
                <Form className="forms" action="contactform.php" method="post">
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" placeholder="Jane Doe" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label >Email Address</Form.Label>
                        <Form.Control name="mail" type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cell Phone Number</Form.Label>
                        <Form.Control name="phone" nameplaceholder="Enter Number" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message or Question</Form.Label>
                        <Form.Control  name="message" as="textarea" rows="3" placeholder="Enter Message/Question" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <hr />
            <div className="infoAbove">
            <p>
            NouvEau Inc. (Nouv'Eau is a French acronym meaning New Water) is a closely held private entrepreneurial research, development, and intellectual property holding company.  It makes a patented water from wine including proprietary patent pending wine health mixtures with functional ingredients such as Vitamin B's.  NouvEau demonstrates its technology and products in commercial proof of concept in order to license or sell its goods and assets.   It is offering a Series A seed round to Accredited Investors to manufacture and sell Wine Health Boost into Ecommerce and retail markets. A Prospectus requiring Accredited Investor Certification is available by contacting: <a href="mailto:tpeyton@nouv-eau.com">tpeyton@nouv-eau.com</a>.
            </p>
            </div>
            <hr />
            <div className="infoSpace">
                <h1 style={{fontSize: '24px'}}>
                    A partial listing of its intellectual property includes: 
                </h1>
                <p>
                    US Patent 7569146 "By-Products from Fermentation Still Bottoms" <br/> US Patent Pending "Composition of Matter and Method of Use for Wine Health Mixtures" <br/> EU (FR) Patent 1748835 ""Method for Producing a Beverage from Fermentation Still Bottoms" <br/> US Registered Trademark 5025613 and International Registered Trademark 1320847 "Eau de Vin" (Water of Wine) <br/> US RegisteredTrademark 5548696 "Wine Health Boost" <br/> US Trademark Intent to Use "Sante' du Vin" (Health of Wine)
                </p>
            </div>
            <hr />
            <div className="bottomBar">
                <h2>Copyright NouvEau Inc., 2020 All Rights Reserved</h2>
            </div>
            <br />

       </div>
   )
};


 
 
 
ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
