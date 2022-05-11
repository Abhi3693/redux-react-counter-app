import React from 'react';
import { connect } from 'react-redux';

import Step from './Step';
import MaxValue from './MaxValue';
import { increment, decrement, reset } from '../store/action';

function App(props) {
  return (
    <>
      <div className='container'>
        <h1 className='heading'>Counter App using React-Redux</h1>
        <h2 className='counter'>{props.count}</h2>
        <div className='top-btn-holder'>
          <Step />
          <MaxValue />
        </div>
        <div className='buttom-btn-holder'>
          <button
            onClick={() => props.dispatch(increment())}
            className='btn inc'
          >
            Increment
          </button>
          <button
            onClick={() => props.dispatch(decrement())}
            className='btn dec'
          >
            Decrement
          </button>
          <button onClick={() => props.dispatch(reset())} className='btn reset'>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

function mapStateFromProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateFromProps)(App);
