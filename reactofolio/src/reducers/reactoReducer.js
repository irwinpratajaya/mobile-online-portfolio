const reactoReducer = (state= {posts:[]}, action, ) => {
  switch (action.type) {
    case 'GET_POST':
      return action.payload //Object.assign({}, state, {post: action.payload})

    default:
      return state
  }
}


export default reactoReducer
