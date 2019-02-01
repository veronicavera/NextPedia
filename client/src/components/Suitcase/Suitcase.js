import React, { Component } from 'react';
// import { utils } from 'mocha';
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

    API.deleteItemFromSuitcase(this.props.suitcaseID, itemName).then(() => {
      // console.log(data.data[0].items);
      this.getDataForPage();
    });
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
              getDataForPage={this.getDataForPage}
              onUpdate={this.onUpdate}
              value={suitcaseItem.name}
              item={suitcaseItem.name}
              quantity={suitcaseItem.quantity}
              notes={suitcaseItem.notes}
              id={index}
              key={index}
              showUpdate={this.state.showUpdate}
              suitcaseID={this.state.suitcaseID}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MySuitcase;
