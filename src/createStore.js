export default function createStore(reducer) {
  let state=0;

  const dispatch =(action)=>{
    state=reducer(state, action)
    render();
  }

  const getState = () =>{
      return state;
  }

  return{
    getState,
    dispatch
  }
  // add your code here
}

function render() {
  const container = document.getElementById('container');
}
