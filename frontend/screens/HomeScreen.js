import React from 'react';
import { Link } from 'react-router-dom';
function HomeScreen(props) {
    
    return <div>
        <div className="home-details">
            
            <div className="home-details-info">
                <ul>
                    <br/><br/>
                    <li>
                        <h1 className="home-heading">Welcome to  <span className="brand-name">LADHAR GADGETS</span></h1>
                        <h4 className="home-info">Customer can do comparsion between different mobile phones.</h4>
                    </li>
                    <li>
                        <Link to="/contact" className="home-button">Contact Us</Link>
                    </li>
                    
                    
                </ul>
            </div>
            <div className="home-details-image">
                <img src={require('../images/Others/images4.jpg')} className="img-fluid animated" alt="product" />
            </div>
            
        </div>
                
    </div >
}

export default HomeScreen;