import React, { Component } from 'react';
import MySuitcaseItem from './SuitcaseItem';
import API from '../utils/API';
import './Suitcase.css';
import MySuitcaseForm from '../userdashboard/SuitcaseForm';
import { utils } from 'mocha';

class MySuitcase extends Component {
  state = { suitcaseID: '', suitcaseItems: [] };

  /**
   * As soon as the component mounts, run the getDataForPage function.
   */
  componentDidMount = () => {
    this.getDataForPage();
  };

  /**
   * This queries the underlying database and grabs all items within
   * the individual suitcase being searched. This data is passed to
   * the suitcaseItem component below.
   */
  getDataForPage = () => {
    API.getSuitcase(this.props.suitcaseID).then(data => {
      this.setState({
        suitcaseID: this.props.suitcaseID,
        suitcaseItems: data.data[0].items
      });
    });
  };

  /**
   * This function is used to delete individual items from a given
   * user's specific suitcase. Using the value of an item,
   * it constructs a delete query.
   */
  onDelete = value => {
    //itemName
    const itemName = {
      item: value
    };

    API.deleteItemFromSuitcase(this.props.suitcaseID, itemName).then(data => {
      console.log(data);
      // console.log(data.data[0].items);
      this.getDataForPage();
    });
  };

  render() {
    return (
      <div>
        <div className='suitcase'>
          {this.state.suitcaseItems.map((suitcaseItem, index) => (
            <MySuitcaseItem
              onDelete={this.onDelete}
              value={suitcaseItem.name}
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
