import React, { Component } from "react";
import './landingpage.css';

class Landing extends Component {
  render() {
    return (
      <div className="container-div" style={styles.font} >
        <div className="container-div">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">
                About Us
              </h1>
              <h2>
                Our Purpose
              </h2>
              <p>
                Nextpedia is a customer centric tool that provides customers with an effortless way to book inclusive and sustainable flights globally.
                Customers will have the ability to book flights by searching flights and obtaining comparable and affordable airfare to their destination.
                Nextfare, always a positive experience.
              </p>
            </div>
          </div>
        </div>
      </div >
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
