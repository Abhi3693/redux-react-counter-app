import { createStore } from 'redux';

function counterReducer(
  state = { count: 0, step: 1, maxValue: Infinity },
  action
) {
  switch (action.type) {
    case 'increment':
      if (state.count + state.step > state.maxValue) {
        alert(`Max Value ${state.maxValue} can not be exceed`);
        return { ...state, count: 0, step: 1, maxValue: Infinity };
      } else {
        return { ...state, count: state.count + state.step };
      }
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return { ...state, count: 0, step: 1, maxValue: Infinity };
    case 'handleStep':
      return { ...state, step: action.payload };
    case 'handleMaxValue':
      return { ...state, maxValue: action.payload };

    default:
      return state;
  }
}

let store = createStore(counterReducer);

export default store;
