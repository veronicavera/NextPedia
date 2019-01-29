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

function MySuitcaseItem(props) {
  return (
    <div className='suitcase-item' value={props.id}>
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
    </div>
  );
}

export default MySuitcaseItem;
