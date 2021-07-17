import React from 'react'
// import {NavLink} from "react-router-dom";


const Contact = () => {
    return (
        <>


 <div class="main-card offset-lg-1">
 <div className="card">
<h4 className="card-title">Phone No.<i class="fa fas fa-phone-volume fa-1x"></i></h4>
<p className="card-text">+914553454354</p>
</div>

 <div className="card">
<h5 className="card-title">Email<i class="fa fa fa-envelope-open fa-1x"></i></h5>
<p className="card-text">mywebsite@gmail.com</p>
</div>

 <div className="card">
<h5 className="card-title">Location<i class="zmdi zmdi-pin animated infinite wobble zmdi-hc-fw"></i> </h5>
<p className="card-text">Sonipat,Haryana,India</p>
</div>
</div>



<div className="contact-container">
<h2 class="contact-heading"> Get In Touch</h2>
<div class="contact-form">
<div class="contact-group">
 <input type="text" class="form-contact" name="name" placeholder="Enter your name"/>
 <input type="email" class="form-contact" name="email" placeholder="Enter your email"/>
 <input type="phone" class="form-contact" name="phone" placeholder="Enter your phone"/>
  </div>
        <textarea class="text-box" placeholder="Message...." name="w3review" rows="4" cols="50"></textarea>
        </div>
         <div button  type="submit" class=" login-btn btn btn-warning" name="submit">Send Message</div>
   </div> 



    
        </>
    )
}

export default Contact
