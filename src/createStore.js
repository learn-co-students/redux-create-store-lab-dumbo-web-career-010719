export default function createStore(reducer) {
  let state;

  dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  getState = () => {
    return state
  }

  return (dispatch, getState)
}

function render() {
  const container = document.getElementById('container');
}

let store = createStore()
store.dispatch({type: '@@INIT'})
