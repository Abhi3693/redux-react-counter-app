import React from 'react';
import { connect } from 'react-redux';

import { handleStep } from '../store/action';

function Step(props) {
  return (
    <div className=''>
      <h2>Steps</h2>
      <div className='step-holder'>
        <button
          onClick={() => props.dispatch(handleStep(5))}
          className={
            props.step === 5
              ? 'btn-small step step-5 active'
              : 'btn-small step step-5'
          }
        >
          5
        </button>
        <button
          onClick={() => props.dispatch(handleStep(10))}
          className={
            props.step === 10
              ? 'btn-small step step-10 active'
              : 'btn-small step step-10'
          }
        >
          10
        </button>
        <button
          onClick={() => props.dispatch(handleStep(15))}
          className={
            props.step === 15
              ? 'btn-small step step-15 active'
              : 'btn-small step step-15'
          }
        >
          15
        </button>
      </div>
    </div>
  );
}

function mapStateFromProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateFromProps)(Step);
