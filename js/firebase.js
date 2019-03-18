var appFB = {};
(function () {
    // Make sure you replace this code with youre api key, that you get from firebase
    var config = {
        apiKey: "AIzaSyBZLLoxX2akf3wOkXaQ6NbbGgYOPDWSYqU",
        authDomain: "bamsemoms-web1.firebaseapp.com",
        databaseURL: "https://bamsemoms-web1.firebaseio.com",
        projectId: "bamsemoms-web1",
        storageBucket: "bamsemoms-web1.appspot.com",
        messagingSenderId: "779805817224"
    };
    firebase.initializeApp(config);
    appFB = firebase;
})();