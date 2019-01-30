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
  updateSuitcaseItem = () => {
    // 1. create itemInfo
    const itemInfo = {
      item: this.state.item,
      quantity: this.state.quantity,
      notes: this.state.notes,
      old: true
    };

    API.updateItemInSuitcase(this.props.suitcaseID, itemInfo);
  };

  render() {
    return (
      <div>
        <form>
          <div className='suitcase-form-input'>
            <label htmlFor='quantity'>Quantity</label>
            <input
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
              onChange={this.handleInputChange}
              name='notes'
              id='notes'
              type='text'
              value={this.state.notes}
            />
          </div>

          <input
            type='submit'
            value='Submit'
            onClick={() => this.updateSuitcaseItem()}
          />
        </form>
      </div>
    );
  }
}

export default MySuitcaseUpdateForm;
