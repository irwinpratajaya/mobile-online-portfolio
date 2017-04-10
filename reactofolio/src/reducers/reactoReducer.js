const reactoReducer = (state= {posts:[]}, action, ) => {
  switch (action.type) {
    case 'GET_POST':
      return Object.assign({}, state, {posts: action.payload})

    default:
      return state
  }
}


export default reactoReducer
