import React, { Component } from 'react';
import './Suitcase.css';
import API from '../utils/API';

class MySuitcaseUpdateForm extends Component {
  /**
   * getDataForPage queries the database and loads a full list of items
   * within the suitcase. See Suitcase.js for more details.
   */
  getDataForPage = this.props.getDataForPage;

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

    // 2. do API.updateItemInSuitcase with suitcaseID and then itemInfo
    alert(this.state.item);
    alert(this.state.quantity);
    alert(this.state.notes);
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
            onClick={this.updateSuitcaseItem}
          />
        </form>
      </div>
    );
  }
}

export default MySuitcaseUpdateForm;
