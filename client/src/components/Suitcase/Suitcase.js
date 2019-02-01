import React, { Component } from 'react';
import { utils } from 'mocha';
import API from '../utils/API';
import MySuitcaseItem from './SuitcaseItem';
import MySuitcaseForm from './SuitcaseForm';
import './Suitcase.css';

class MySuitcase extends Component {
  state = { suitcaseID: '', suitcaseItems: [], deletedState: false };

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
    console.log('getting data for page');
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

    this.setState({
      deletedState: 'no'
    });

    console.log(this.state.deletedState);

    const itemName = {
      item: value
    };
    console.log(this);
    // console.log(value);

    API.deleteItemFromSuitcase(this.props.suitcaseID, itemName).then(data => {
      console.log(data);

      // console.log(data.data[0].items);
      console.log('done');
      this.setState({ deletedState: itemName });
      this.getDataForPage();
      console.log(this);
      this.forceUpdate();
    });
  };

  render() {
    return (
      <div className='suitcase-area'>
        <h2>Trip Suitcase</h2>
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
      </div>
    );
  }
}

export default MySuitcase;
