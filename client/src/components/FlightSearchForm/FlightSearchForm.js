import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import moment from 'moment';
import './flightsearchform.css';

const styles = {
  form: {
    height: 'inherit',
    width: 'inherit',
    display: 'grid',
    paddingTop: '10px',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  label: {
    display: 'grid',
    justifyContent: 'center'
  },
  input: {
    marginTop: '10px',
    marginBottom: '20px',
    width: '30vw',
    height: '40px'
  }
};

const airports = [
  { label: "ORD", value: "ORD" },
  { label: "PHL", value: "PHL" },
  { label: "SEA", value: "SEA" },
  { label: "JFK", value: "JFK" },
  { label: "LGA", value: "LGA" },
  { label: "ATL", value: "ATL" },
  { label: "DFW", value: "DFW" },
  { label: "LAX", value: "LAX" },
  { label: "DEN", value: "DEN" },
  { label: "SFO", value: "SFO" },
  { label: "PHX", value: "PHX" },
  { label: "MIA", value: "MIA" },
  { label: "IAH", value: "IAH" },
  { label: "BOS", value: "BOS" },
  { label: "SLC", value: "SLC" },
  { label: "DCA", value: "DCA" },
  { label: "SAN", value: "SAN" },
  { label: "TPA", value: "TPA" },
  { label: "MDW", value: "MDW" },
  { label: "HNL", value: "HNL" },
  { label: "PDX", value: "PDX" },
  
];


class FlightSearchForm extends Component {
  state = {
    departureDate: null,
    origin: null,
    destination: null,
    lengthOfStay: null,
    redirect: false
  };

  // handleInputChange = event => {
  //   console.log(event);
  //   const value = event.value;
  //   const name =  event.label || event.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value.toUpperCase();
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleOriginChange = (origin) => {
    this.setState({ origin });
  };

  handleDestinationChange = (destination) => {
    this.setState({ destination });
  };

  // handleSubmit
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  render() {
    const redirect = this.state.redirect;
    const { origin, destination, departureDate } = this.state;
    if (redirect === true) {
      if (origin !== null && destination !== null && origin.value !== destination.value) {

      // console.log(this.state);
        if (origin.value.length !== null && destination.value.length !== null && moment(departureDate) > moment()) {
          const url = `/flights/${origin.value}/${destination.value}/${departureDate}`;

          return <Redirect to={url} />;
        } else if (moment(departureDate) > moment()){
          this.setState({ redirect: false });
          alert('Please use the 3 letter IATA (airport) codes');
        } else {
          this.setState({ redirect: false });
          alert('Please select a valid trip');
        }
      } else if (origin === null && destination === null || origin.value === destination.value) {
        this.setState({ redirect: false });
        alert('Please select a valid trip');
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

                <h3 style={{ justifySelf: 'center'}}>Departure Airport:</h3>
                <Select value={origin} onChange={this.handleOriginChange} options={ airports } />

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

              <h3 style={{ justifySelf: 'center'}}>Destination Airport:</h3>
              <Select value={destination} onChange={this.handleDestinationChange} options={ airports } />

              </label>

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
