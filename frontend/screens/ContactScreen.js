import React from 'react';
function ContactScreen(props) {
    return <div>
        <div className="home-details">
            
            <div className="home-details-info">
                <ul>
                    <br/><br/>
                    <li>
                        <div className="form">
                            <form>
                                <ul className="form-container">
                                    <li>
                                        <h1 className="form-heading">Contact Us</h1>
                                    </li>
                                    <li>
                                        <label htmlFor="name">
                                            Name
                                        </label>
                                        <input type="text" name="name" id="name" >

                                        </input>
                                    </li>
                                    <li>
                                        <label htmlFor="phone">
                                            Phone
                                        </label>
                                        <input type="text" name="phone" id="phone" >

                                        </input>
                                    </li>
                                    <li>
                                        <label htmlFor="email">
                                            Email
                                        </label>
                                        <input type="email" name="email" id="email" >

                                        </input>
                                    </li>
                                    <li>
                                        <label htmlFor="country">
                                            Comments
                                        </label>
                                        <textarea name="comments"></textarea>
                                    </li>
                                    <div>
                                    <button type="submit" class="contact-button">Submit</button>
                                    </div>
                                </ul>
                            </form>
                        </div>
                    
                    </li>  
                    <li>  

                        <div className="contact-style" >
                            <ul className="contact-style-container">
                                <li><br/></li>
                                <li>
                                    Follow us:
                                </li>
                                
                                <li>
                                    <i className="fa fa-facebook-square icon-style" aria-hidden="true"></i>
                                    <i className="fa fa-twitter-square icon-style" aria-hidden="true"></i>
                                    <i className="fa fa-youtube-square icon-style" aria-hidden="true"></i>
                                    <i className="fa fa-linkedin icon-style" aria-hidden="true"></i>
                                    <i className="fa fa-instagram icon-style" aria-hidden="true"></i>
                                    <i className="fa fa-google-plus icon-style" aria-hidden="true"></i>
                                </li>
                                <li>
                
                                        <i class="fa fa-envelope-o icon-style " aria-hidden="true"></i>   info@ladhargadgets.com<br />
                                        <i class="fa fa-mobile icon-style" aria-hidden="true"></i>    +91 872-505-3550<br />
                                        <i class="fa fa-map-marker icon-style" aria-hidden="true"></i>    Kirti Nagar,Pharwara,IN<br />
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                <div className="home-details-image">
                <img src={require('../images/Others/images6.jpg')} className="img-fluid-contact animated" alt="product" />
            </div>
                </li>
                <li>
                    <br/>
                </li>
                
            </ul>
        </div>
                
    </div >
    
    }
export default ContactScreen
