const {getAllMoviesEvent,} = require('./events');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
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
