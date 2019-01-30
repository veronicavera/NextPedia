import React, { Component } from 'react';
import './index.css'

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

  handleFormSubmit = event => {
    event.preventDefault();
    window.location.assign(`mailto:nextpedia21@gmail.com?subject=${this.state.subject}&body=${this.state.body}`)
  }

  render() {
      return (
        <div>
            <h1>
                Contact Us!
            </h1>
            <form id='contactForm'>
                <h2>
                    What can we help you with?
                </h2>
                <textarea
                    value={this.state.subject}
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    onChange={this.handleInputChange}
                />
                <h2>
                    Please describe the issue in more depth
                </h2>
                <textarea
                    value={this.state.body}
                    name="body"
                    type="text"
                    placeholder="Body"
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleFormSubmit} type='submit'>Submit</button>
            </form>
        </div>
      );
    }
}

export default Contact;