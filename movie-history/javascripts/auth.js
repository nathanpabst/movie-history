const {getAllMoviesEvent,} = require('./events');
const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      setUID(user.uid);
      $('#myMovies').removeClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#navSearch').removeClass('hide');
      $('#mine').removeClass('hide');
      $('#logOut').removeClass('hide');
      $('#authenticate').addClass('hide');
      getAllMoviesEvent();
    } else {
      // No user is signed in.
      $('#mine, #navSearch, #logOut').addClass('hide');
      $('#authenticate').removeClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
