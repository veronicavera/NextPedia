import React, { Component } from 'react';
import './Suitcase.css';
import API from '../utils/API';

class MySuitcaseForm extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  getDataForPage = this.props.getDataForPage;

  state = {
    suitcaseID: this.props.suitcaseID,
    item: '',
    quantity: 0,
    notes: ''
  };
  // state: should be what goes into the form

  // on change: update the state
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  updateSuitcase = () => {
    console.log('hi');
    API.addItemToSuitcase(this.props.suitcaseID, {
      item: this.state.item,
      quantity: parseInt(this.state.quantity),
      notes: this.state.notes
    }).then(data => {
      console.log(data);
      this.getDataForPage();
    });
  };

  // addToSuitcase: (req, res) => {
  //   if (req.body.item && req.body.quantity && req.body.notes) {
  //       db.Suitcase
  //           .updateOne({_id: req.params.id},
  //               {
  //                   $push: {
  //                       items: {
  //                           name: req.body.item,
  //                           quantity: req.body.quantity
  //                       }
  //                   },
  //                   notes: req.body.notes
  //               })
  //           .then(success => res.json(success))
  //           .catch(err => res.json(err));

  // on submit: do the ajax query to the backend
  eventTest = () => {
    alert(this.state.item + ' ' + this.state.quantity);
  };

  render() {
    return (
      <div>
        <form className='suitcase-form'>
          <div className='suitcase-form-input'>
            <label htmlFor='item'>Item</label>
            <input
              onChange={this.handleInputChange}
              name='item'
              id='item'
              type='text'
            />
          </div>
          <div className='suitcase-form-input'>
            <label htmlFor='quantity'>Quantity</label>
            <input
              onChange={this.handleInputChange}
              name='quantity'
              id='quantity'
              type='number'
            />
          </div>
          <div className='suitcase-form-input'>
            <label htmlFor='notes'>Notes</label>
            <input
              onChange={this.handleInputChange}
              name='notes'
              id='notes'
              type='text'
            />
          </div>

          <p onClick={this.updateSuitcase}>asdf</p>

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default MySuitcaseForm;
