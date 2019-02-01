import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './flightsearchform.css';

const styles = {
  form: {
    height: 'inherit',
    width: 'inherit',
    display: 'grid',
    paddingTop: '10px',
    // flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  label: {
    display: 'grid',
    justifyContent: 'center'
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },
  input: {
    marginTop: '10px',
    marginBottom: '20px',
    width: '30vw',
    height: '40px'
  }
};

class FlightSearchForm extends Component {
  state = {
    departureDate: null,
    origin: null,
    destination: null,
    lengthOfStay: null,
    redirect: false
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value.toUpperCase();
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  // handleSubmit
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  render() {
    const redirect = this.state.redirect;
    if (redirect === true) {
      const { origin, destination, departureDate } = this.state;
      if ((origin.length === 3) & (destination.length === 3)) {
        const url = `/flights/${origin}/${destination}/${departureDate}`;
        return <Redirect to={url} />;
      } else {
        this.setState({ redirect: false });
        alert('Please use the 3 letter IATA (airport) codes');
      }
    }
    return (
      <div className='container-div' id='flight-search-container'>
        <div className='card'>
          <div className='card-body' style={{ height: '50vh' }}>
            <form
              id='flight-search-form'
              style={styles.form}
              onSubmit={this.handleSubmit}
            >
              <label style={styles.label}>
                <h3 style={{ justifySelf: 'center' }}>Departure Airport:</h3>
                <input
                  name='origin'
                  type='text'
                  style={styles.input}
                  value={this.state.origin}
                  onChange={this.handleInputChange}
                  className='flightFormInput'
                />
              </label>
              <label style={styles.label}>
                <h3 style={{ justifySelf: 'center' }}>Departure Date:</h3>
                <input
                  name='departureDate'
                  type='date'
                  style={styles.input}
                  value={this.state.departureDate}
                  onChange={this.handleInputChange}
                  className='flightFormInput'
                />
              </label>
              <label style={styles.label}>
                <h3 style={{ justifySelf: 'center' }}>Destination Airport:</h3>
                <input
                  name='destination'
                  type='text'
                  style={styles.input}
                  value={this.state.destination}
                  onChange={this.handleInputChange}
                  className='flightFormInput'
                />
              </label>
              {/* <label style={styles.label}>
                Length Of Stay:
                <input name="lengthOfStay" type="number" value={this.state.lengthOfStay} onChange={this.handleInputChange} className="flightFormInput" />
              </label> */}

              <input
                type='submit'
                value='Submit'
                style={styles.input}
                className='btn btn-outline-success'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightSearchForm;
