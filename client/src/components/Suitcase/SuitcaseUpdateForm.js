import React, { Component } from 'react';
import './Suitcase.css';
import API from '../utils/API';

class MySuitcaseUpdateForm extends Component {
  state = {
    suitcaseID: this.props.suitcaseID,
    item: this.props.item,
    quantity: this.props.quantity,
    notes: this.props.notes
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
  updateSuitcaseItem = e => {
    e.preventDefault();
    if (parseInt(this.state.quantity) <= 0) {
      alert('Please enter a quantity of 1 or greater!');
      return;
    } else {
      // 1. create itemInfo
      const itemInfo = {
        item: this.state.item,
        quantity: this.state.quantity,
        notes: this.state.notes,
        old: true
      };
      console.log('right before api!!');
      API.updateItemInSuitcase(this.props.suitcaseID, itemInfo).then(function(
        data
      ) {
        console.log('this is what we got back!@!!', data);
        window.location.reload();
      });
    }
    console.log('bottom of func!!');
  };

  render() {
    return (
      <div>
        <form>
          <div className='suitcase-form-input'>
            <label htmlFor='quantity'>Quantity</label>
            <input
              className='suitcase-form-input-area'
              onChange={this.handleInputChange}
              name='quantity'
              id='quantity'
              type='number'
              value={this.state.quantity}
            />
          </div>
          <div className='suitcase-form-input'>
            <label htmlFor='notes'>Notes</label>
            <input
              className='suitcase-form-input-area'
              onChange={this.handleInputChange}
              name='notes'
              id='notes'
              type='text'
              value={this.state.notes}
            />
          </div>

          <input
            className='suitcase-form-input-button btn btn-outline-success'
            type='submit'
            value='Submit'
            onClick={this.updateSuitcaseItem}
          />
        </form>
      </div>
    );
  }
}

export default MySuitcaseUpdateForm;
