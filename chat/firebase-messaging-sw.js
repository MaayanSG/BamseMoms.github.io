importScripts('https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: '352158102660'
});
var messaging = firebase.messaging();


