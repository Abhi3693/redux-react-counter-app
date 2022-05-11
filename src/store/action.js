export function increment() {
  return {
    type: 'increment',
  };
}

export function decrement() {
  return {
    type: 'decrement',
  };
}

export function reset() {
  return {
    type: 'reset',
  };
}

export function handleStep(val) {
  return {
    type: 'handleStep',
    payload: val,
  };
}

export function handleMaxValue(val) {
  return {
    type: 'handleMaxValue',
    payload: val,
  };
}
