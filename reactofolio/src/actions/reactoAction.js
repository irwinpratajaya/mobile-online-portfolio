export const getPost = results => ({
  type: 'GET_POST',
  payload: results
});


export const fetchPosts = () => {
  return (dispatch) => {
    fetch('https://api.myjson.com/bins/1h27gn', {
      method: 'get',
    })
    .then(result => {
      return result.json()
    })
    .then(data => {
      dispatch(getTodos(data));
    })
  }
}
