import React, { Component } from 'react';
import MySuitcaseItem from './SuitcaseItem';
import API from '../utils/API';
import './Suitcase.css';
import MySuitcaseForm from '../userdashboard/SuitcaseForm';
import { utils } from 'mocha';

class MySuitcase extends Component {
  state = { suitcaseID: '', suitcaseItems: [] };

  componentDidMount = () => {
    this.getDataForPage();
  };

  getDataForPage = () => {
    API.getSuitcase(this.props.suitcaseID).then(data => {
      console.log(data);
      // console.log(data.data[0].items);
      this.setState({
        suitcaseID: this.props.suitcaseID,
        suitcaseItems: data.data[0].items
      });
    });
  };

  onDelete = id => {
    //
    alert(id);
  };

  render() {
    return (
      <div>
        <div className='suitcase'>
          {this.state.suitcaseItems.map((suitcaseItem, index) => (
            <MySuitcaseItem
              onDelete={this.onDelete}
              item={suitcaseItem.name}
              quantity={suitcaseItem.quantity}
              notes={suitcaseItem.notes}
              id={index}
              key={index}
            />
          ))}
        </div>
        <div className='suitcase-form-input'>
          <MySuitcaseForm
            note={this.state.suitcaseNote}
            suitcaseID={this.state.suitcaseID}
            getDataForPage={this.getDataForPage}
          />
        </div>
      </div>
    );
  }
}

export default MySuitcase;
