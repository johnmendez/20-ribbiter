import createResource from 'redux-thunk-rest';

export default createResource('user', {
  url: 'http://ribbiterapi.herokuapp.com/users',
});
