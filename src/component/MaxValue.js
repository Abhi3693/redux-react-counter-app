import React from 'react';
import { connect } from 'react-redux';

import { handleMaxValue } from '../store/action';

function MaxValue(props) {
  return (
    <div className=''>
      <h2>Max Value</h2>
      <div className='step-holder value-holder'>
        <button
          onClick={() => props.dispatch(handleMaxValue(15))}
          className={
            props.value === 15
              ? 'btn-small value value-15 active'
              : 'btn-small value value-15'
          }
        >
          15
        </button>
        <button
          onClick={() => props.dispatch(handleMaxValue(100))}
          className={
            props.value === 100
              ? 'btn-small value value-100 active'
              : 'btn-small value value-100'
          }
        >
          100
        </button>
        <button
          onClick={() => props.dispatch(handleMaxValue(200))}
          className={
            props.value === 200
              ? 'btn-small value value-200 active'
              : 'btn-small value value-200'
          }
        >
          200
        </button>
      </div>
    </div>
  );
}

function mapStateFromProps(state) {
  return {
    value: state.maxValue,
  };
}

export default connect(mapStateFromProps)(MaxValue);
