/**
 * Each suitcaseItem is a single item within the overall suitcase.
 *
 * Each item has a name and a quantity; some items have notes as well.
 *
 * props.onDelete is a function that handles deleting items. See "suitcase" for more details
 *
 */

import React from 'react';
import '../allpages/reset.css';
import './Suitcase.css';
import MySuitcaseUpdateForm from './SuitcaseUpdateForm';

function MySuitcaseItem(props) {
  return (
    <div className='suitcase-item' value={props.value}>
      <p
        className='suitcase-item-delete'
        onClick={() => props.onDelete(props.value)}
      >
        X
      </p>
      <div className='suitcase-item-header'>
        <p>Item: {props.item}</p>

        <p>Quantity: {props.quantity}</p>
      </div>

      {props.notes && (
        <div className='suitcase-item-notes'>
          <p>Notes: {props.notes}</p>
        </div>
      )}
      <div className='suitcase-item-update-button'>
        <button onClick={() => props.onUpdate(props.value)}>Update Item</button>
      </div>
      <MySuitcaseUpdateForm
        item={props.item}
        quantity={props.quantity}
        notes={props.notes}
      />
    </div>
  );
}

export default MySuitcaseItem;
