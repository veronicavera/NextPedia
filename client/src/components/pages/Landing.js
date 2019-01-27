import React, { Component } from "react";
import './landingpage.css';

class Landing extends Component {
  render() {
    return (
      <div class="container-div" style={styles.font}>
        <h1>About Us</h1>
        <p>Our Purpose
        Nextpedia is customer centric tool that provides customers with an effortless way to book inclusive and sustainable flights globally.</p>
        <p>Customers will have the ability to book flights by searching flights and obtaining comparable and affordable airfare to their destination.</p>
        <p>Nextfare, always a positive experience</p>
      </div>
    );
  }
}

const styles = {
  font: {
    color: 'white'
  }
}
export default Landing;
