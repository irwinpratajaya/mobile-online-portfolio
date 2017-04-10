export const getPost = results => ({
  type: 'GET_POST',
  payload: results
});


export const fetchPosts = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/posts', {
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
