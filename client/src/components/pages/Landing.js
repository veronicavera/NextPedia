import React, { Component } from "react";
import './landingpage.css';
import { AuthUserContext } from './Session';
import FlightFinder from "./FlightFinder";
import About from './About'
import SignUpPage from './SignUp'

class Landing extends Component {
  render() {

    return (    
    <>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <FlightFinder /> : <SignUpPage />
        }
      </AuthUserContext.Consumer>
    </>
      
    //   <div className="container-div" style={styles.font} >
    //     <h1>About Us</h1>
    //     <p>Our Purpose
    //     Nextpedia is customer centric tool that provides customers with an effortless way to book inclusive and sustainable flights globally.</p>
    //     <p>Customers will have the ability to book flights by searching flights and obtaining comparable and affordable airfare to their destination.</p>
    //     <p>Nextfare, always a positive experience</p>
    //   </div >
    );
  }
}

const styles = {
  font: {
    color: 'black',
    flexDirection: 'column',
    textAlign: 'center'
  },
}
export default Landing;
