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
/* examples */
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    //console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);

  //var night = parseInt(inputJson["num"]);
  //console.log(inputJson["room"].slice(8));
  //var cost = parseInt(inputJson["room"].slice(-3));
  // console.log(cost);
  // console.log("The cost for this reservation is " + night * cost);

  /* save the data to database */
  firebase
    .firestore()
    .collection("hoteldata") // use different name
    .add(inputJson);

  /* clear the entry */
  $("form")[0].reset();
});
