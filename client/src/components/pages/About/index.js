import React, { Component } from 'react';
import './indexAbout.css'

class About extends Component {
  state = {
    body: '',
    subject: ''
  }

  render() {
    return (
      <div id='pageSizing'>
         <div id='aboutUsContainer'>
          <h1>
              About Us
          </h1>
              <h2>
              NextPedia is a customer centric tool that provides audience with an effortless way to book inclusive and sustainable flights globally.
              Customers will have the ability to book flights by searching flights and obtaining comparable and affordable airfare to their destination.
              </h2>
               <h2>NextPedia, always a positive experience.
              </h2>
       </div>
  </div>
    );
  }
}

export default About;