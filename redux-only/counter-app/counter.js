const { createStore } = require("redux");

// Steps:

// Initial stage
const initialState = {
  count: 0,
};

// actions - action - action creator

//increment
//decrement
//reset
//increaseByAmount

// action
{
  type: "INCREMENT";
}
//Action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

const resetAction = () => {
  return {
    type: "RESET",
  };
};

const increaseByAmountAction = (anyAmount) => {
  return {
    type: "INCREASE_BY_AMOUNT",
    payload: anyAmount,
  };
};

// reducer

const counterReducer = (state = initialState, action) => {
  console.log(action, state);
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREASE_BY_AMOUNT") {
    return {
      count: state.count + action.payload,
    };
  }
};

// store
const store = createStore(counterReducer);

// subscript to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

store.dispatch(decrementAction());
store.dispatch(decrementAction());

store.dispatch(resetAction());

// dispatch action with payload
store.dispatch(increaseByAmountAction(15));
store.dispatch(increaseByAmountAction(-5));
