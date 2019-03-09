var appFB = {};
(function () {
    // Make sure you replace this code with youre api key, that you get from firebase
    var config = {
    apiKey: "AIzaSyATL2MU1BsQ_B40nDgpgunlm6c5GwQOEYg",
    authDomain: "bamsemoms-github-io.firebaseapp.com",
    databaseURL: "https://bamsemoms-github-io.firebaseio.com",
    projectId: "bamsemoms-github-io",
    storageBucket: "bamsemoms-github-io.appspot.com",
    messagingSenderId: "352158102660"
    };
    firebase.initializeApp(config);
    appFB = firebase;
})();