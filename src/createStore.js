// import countReducer from "./reducers/countReducer"
// import candyReducer from "./reducers/candyReducer"

export default function createStore(reducer) {
  // add your code here
  let state

  function dispatch(action){
    state= reducer(state,action)
    render()
  }

  function getState(){
    return state
  }

  dispatch({type:"start"})

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
