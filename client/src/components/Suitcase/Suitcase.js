import React, { Component } from 'react';
import { utils } from 'mocha';
import API from '../utils/API';
import MySuitcaseItem from './SuitcaseItem';
import MySuitcaseForm from './SuitcaseForm';
import './Suitcase.css';

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

  /** this function is used to update an individual item
   * from a given suitcase. Using the value of an item, it
   * updates the form and lets users update.
   */
  onUpdate = value => {
    alert(value);
  };

  render() {
    return (
      <div className='suitcase-wrapper'>
        <div className='suitcase-form-wrapper'>
          <MySuitcaseForm
            note={this.state.suitcaseNote}
            suitcaseID={this.state.suitcaseID}
            getDataForPage={this.getDataForPage}
          />
        </div>
        <div className='suitcase'>
          {this.state.suitcaseItems.map((suitcaseItem, index) => (
            <MySuitcaseItem
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              value={suitcaseItem.name}
              item={suitcaseItem.name}
              quantity={suitcaseItem.quantity}
              notes={suitcaseItem.notes}
              id={index}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MySuitcase;
