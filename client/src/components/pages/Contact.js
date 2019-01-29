import React, { Component } from 'react';

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
        <>
            <h1>
                Contact Us!
            </h1>
            <form>
                <h2>
                    What can we help you with?
                </h2>
                <input
                    value={this.state.subject}
                    name="subject"
                    type="text"
                    placeholder="subject"
                    onChange={this.handleInputChange}
                />
                <h2>
                    Please describe the issue more in-depth
                </h2>
                <textarea
                    value={this.state.body}
                    name="body"
                    type="text"
                    placeholder="body"
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleFormSubmit} type='submit'>Submit</button>
            </form>
        </>
      );
    }
}

export default Contact;