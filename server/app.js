$(document).ready(function(){
    //api key for donorbox
    const donorkey = "umko1FKs7ihxX1CmjP0D0Db-jQ-bHMGfDyt0";
    
    var firebaseConfig = {
        apiKey: "AIzaSyCOs7BgPYCinVCMBtWAQMS9wHqIWOUj0Cc",
        authDomain: "patrickbyker.firebaseapp.com",
        databaseURL: "https://patrickbyker.firebaseio.com",
        projectId: "patrickbyker",
        storageBucket: "patrickbyker.appspot.com",
        messagingSenderId: "337255849869",
        appId: "1:337255849869:web:27952a0407d9b49e8ce7c4",
        measurementId: "G-SKPZ37DHEE"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
})