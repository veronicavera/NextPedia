import React, { Component } from 'react';
import './index.css';
class Contact extends Component {
  state = {
    body: '',
    subject: ''
  }
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
  };

  render() {
      return (
          <>
              <h1>
                  Contact Us!
              </h1>
              <form action={`mailto:nextpedia21@gmail.com?subject=Please Help Me&body=${this.state.body}`} method='post' enctype='text/plain'>
                  <h2>
                      What can we help you with?
                  </h2>
                  <textarea
                      value={this.state.body}
                      name="body"
                      type="text"
                      placeholder="body"
                      onChange={this.handleInputChange}
                  />
                  <input type='reset'/>
                  <button type='submit'>Submit</button>
              </form>
          </>
      );
    }
}

export default Contact;