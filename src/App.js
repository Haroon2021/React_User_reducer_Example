import React, { useReducer} from "react";
// reducer function takes the states of all variables as input
// action is a way to determine what to do to the states (ie what action to do to the states)
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      // increment should not change the value of showtext hence the state remains the same
      // Increment should increase th ecount state by 1
      return {count: state.count + 1, showText: state.showText}
    case "toggleShowText":
       return {count: state.count, showText: !state.showText}
      default:
        return state;
  }
}
const App = () => {
  //LHS
  // state holds the initial/ current state 
  // dispatch is the function used to change the state - used when using the onclick in the JSX code
  // RHS
  // reducer is the function that will change states
  // {count: 0, showText: true} are the initial states
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick ={ () => {
          dispatch({type: "INCREMENT"});
          dispatch({type: "toggleShowText"});
        }}
        >
          Click Here
      </button>
      { state.showText && <p>Even number</p>}
    </div>
  )
}

export default App;

