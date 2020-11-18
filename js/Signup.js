// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAzcwgZuLA7dO9g4sQhXQVTUgCo0M8m2qM",
  authDomain: "grocerylist-91956.firebaseapp.com",
  databaseURL: "https://grocerylist-91956.firebaseio.com",
  projectId: "grocerylist-91956",
  storageBucket: "grocerylist-91956.appspot.com",
  messagingSenderId: "813812426276",
  appId: "1:813812426276:web:93e5897af12892ff78dab1",
  measurementId: "G-VZ83BTR72T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var email = "yilianz1@gmail.com";
var password = "dddsgs";
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(success => {
    // Signed in
    // ...
    console.log("login in");
    user = firebase.auth().currentUser;
 //   user.updatePhoneNumber("8034431111");
    if (user != null) {
      user.providerData.forEach(function(profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.phoneNumber);
      });
    }
  })
  .catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  console.log("here");

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword("yilianz1@gmail.com", "dddsgs")
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
