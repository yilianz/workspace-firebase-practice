// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDjdVP2wSWz91dPgET3KIf4XbdxPB_2l1w",
  authDomain: "javascriptdemo-237db.firebaseapp.com",
  databaseURL: "https://javascriptdemo-237db.firebaseio.com",
  projectId: "javascriptdemo-237db",
  storageBucket: "javascriptdemo-237db.appspot.com",
  messagingSenderId: "397768045903",
  appId: "1:397768045903:web:64fc692aef3653b407013a",
  measurementId: "G-9W77ZD235X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("I am here");

$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
  //get the value of form
  var choices = $(".sampleSurvey input[name='choice']:checked").val();
  var comments = $(".sampleSurvey textarea[name='comm']").val();

  firebase
    .firestore()
    .collection("surveydata")
    .add({
      choice: choices,
      comment: comments
    });

  // save the data to database
  console.log("Save " + choices + " " + comments);
});

// update the result in table

firebase
  .firestore()
  .collection("surveydata")
  .onSnapshot(function(querySnapshot) {
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    querySnapshot.forEach(function(doc) {
      console.log("snapshot added ", doc.data().choice);
      var s = doc.data().choice;
      console.log(s);
      switch (s) {
        case "A":
          n1++;
          $("#ans1").text(n1);
          break;
        case "B":
          n2++;
          $("#ans2").text(n2);
          break;
        case "C":
          n3++;
          $("#ans3").text(n3);
          break;
        case "D":
          n4++;
          $("#ans4").text(n4);
          break;
        case "E":
          n5++;
          $("#ans5").text(n5);
          break;
        default:
          break;
      }
    });
  });
