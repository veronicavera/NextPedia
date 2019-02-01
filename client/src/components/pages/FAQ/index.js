import React, { Component } from 'react';
import './indexFAQ.css'

class FAQ extends Component {
  state = {
    body: '',
    subject: ''
  }

  render() {
    return (
      <div id='pageSizing'>
      <div id='contactFAQContainer' style={{ minWidth: "100vw", minHeight: "100vh" }}>
       <h1>
           Frequently Asked Questions
       </h1>
       <h2>
        How can I book a flight through NextPedia?
        <li>You must first create a user account</li>
       </h2>
       <h2>
         I already have an NextPedia account, do I need to create a new one every time I want to book a flight?
        <li>No. You are not required to create a new account everytime.</li>
       </h2>
        <h2>
          What is my profile?
        <li>My Profile will allow you to create your own personal customer profile. You can store your airlines reservations, trip necessities and more.</li>
        </h2>
        <h2>
          How do I create a profile?
        <li>You can create your profile by clicking on the Sign-up link in NextPedia.</li>
        </h2>
        <h2>
          How do I sign-in?
        <li>To sign-in simply click on the sign-in link on the main page of NextPedia</li>
        </h2>
        <h2>
          Will NextPedia save my booked flight information?
        <li>NextPedia will save previously booked flight information to your profile</li>
        </h2>
        <h2>Can I use any rebate/coupon codes toward my flight?
        <li>At this time, you will not be able to use any rebate or coupon codes. This funcitonality will be available in the future.</li>
        </h2>
        </div>
      </div>
    );
  }
}

export default FAQ;