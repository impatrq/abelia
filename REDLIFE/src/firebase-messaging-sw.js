importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
   apiKey: "AIzaSyAVvzgsOEBTyb5PkoIJlAy5pKW-YUOi-rc",
   authDomain: "abelia.firebaseapp.com",
   databaseURL: "https://abelia.firebaseio.com",
   projectId: "abelia",
   storageBucket: "abelia.appspot.com",
   messagingSenderId: "1035460197891",
   appId: "1:1035460197891:web:ba715af3de62ae6c135836",
   measurementId: "G-FXPYG8JJYN"
});
const messaging = firebase.messaging();
