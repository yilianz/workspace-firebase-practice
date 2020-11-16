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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  /* save the data to database 
  firebase
    .firestore()
    .collection("hotelreservation")
    .add(inputJson);
*/
  /* clear the entry */
  $("form")[0].reset();
});
