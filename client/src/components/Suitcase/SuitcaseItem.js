/**
 * Each suitcaseItem is a single item within the overall suitcase.
 *
 * Each item has a name and a quantity; some items have notes as well.
 *
 * props.onDelete is a function that handles deleting items. See "suitcase" for more details
 *
 */

import React, { Component } from 'react';
import './Suitcase.css';
import MySuitcaseUpdateForm from './SuitcaseUpdateForm';

class MySuitcaseItem extends Component {
  state = {
    showUpdate: false
  };

  /** this function is used to update an individual item
   * from a given suitcase. Using the value of an item, it
   * updates the form and lets users update.
   */
  onUpdateSelect = () => {
    // alert(value);
    if (this.state.showUpdate === true) {
      this.setState({
        showUpdate: false
      });
    } else {
      this.setState({
        showUpdate: true
      });
    }
  };

  render() {
    return (
      <div className='suitcase-item' value={this.props.value}>
        <div className='suitcase-item-delete'>
          <button onClick={() => this.props.onDelete(this.props.value)}>
            X
          </button>
        </div>
        <div className='suitcase-item-header'>
          <p>Item: {this.props.item}</p>

          <p>Quantity: {this.props.quantity}</p>
        </div>

        {this.props.notes && (
          <div className='suitcase-item-notes'>
            <p>Notes: {this.props.notes}</p>
          </div>
        )}
        <div className='suitcase-item-update-button'>
          <button onClick={() => this.onUpdateSelect()}>Update Item</button>
        </div>
        <div
          className='suitcase-item-update-area'
          style={{ display: this.state.showUpdate ? 'block' : 'none' }}
        >
          <MySuitcaseUpdateForm
            item={this.props.item}
            quantity={this.props.quantity}
            notes={this.props.notes}
            suitcaseID={this.props.suitcaseID}
          />
        </div>
      </div>
    );
  }
}
export default MySuitcaseItem;
