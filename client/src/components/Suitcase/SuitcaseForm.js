import React, { Component } from 'react';
import './Suitcase.css';
import API from '../utils/API';

class MySuitcaseForm extends Component {
  // componentDidMount = () => {
  //   console.log(this.props);
  // };

  /**
   * getDataForPage queries the database and loads a full list of items
   * within the suitcase. See Suitcase.js for more details.
   */
  getDataForPage = this.props.getDataForPage;

  state = {
    suitcaseID: this.props.suitcaseID,
    item: '',
    quantity: 0,
    notes: ''
  };
  // state: should be what goes into the form

  // on change: update the state
  /**
   * handleInputChange updates the state of the suitcase form every time
   * a user types anything into the form.
   */
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  /**
   * UpdateSuitcase will take the information from the state of the suitcase
   * form (updated as part of _handleInputChange_, see above) and add it to the
   * underlying database. Upon completion, refresh the page.
   */
  updateSuitcase = () => {
    API.addItemToSuitcase(this.props.suitcaseID, {
      item: this.state.item,
      quantity: parseInt(this.state.quantity),
      notes: this.state.notes
    }).then(data => {
      console.log(data);
      this.getDataForPage();
    });
  };

  render() {
    return (
      <div>
        <form className='suitcase-form'>
          <div className='suitcase-form-input'>
            <label htmlFor='item'>Item: </label>
            <input
              className='suitcase-form-input-area'
              onChange={this.handleInputChange}
              name='item'
              id='item'
              type='text'
            />
          </div>
          <div className='suitcase-form-input'>
            <label htmlFor='quantity'>Quantity: </label>
            <input
              className='suitcase-form-input-area'
              onChange={this.handleInputChange}
              name='quantity'
              id='quantity'
              type='number'
            />
          </div>
          <div className='suitcase-form-input'>
            <label htmlFor='notes'>Notes: </label>
            <input
              className='suitcase-form-input-area'
              onChange={this.handleInputChange}
              name='notes'
              id='notes'
              type='text'
            />
          </div>

          <input
            className='suitcase-form-submit'
            type='submit'
            value='Submit'
            onClick={this.updateSuitcase}
          />
        </form>
      </div>
    );
  }
}

export default MySuitcaseForm;
