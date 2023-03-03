// Initialize Firebase
var config = {
    apiKey: "AIzaSyC-WS8TR3HV5Sdq3tpHmokrtH6efH4hyt0",
    authDomain: "bodovi.firebaseapp.com",
    databaseURL: "https://bodovi-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bodovi",
    storageBucket: "bodovi.appspot.com",
    messagingSenderId: "772694096270",
    appId: "1:772694096270:web:62debf6e150014b8750cdf"
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
  var database = firebase.database();
  var dataRef = database.ref("data");
// Add data to the database
function addData() {
    var firstname = document.getElementById("firstname").value;
    var secondname = document.getElementById("secondname").value;
    var id = document.getElementById("id").value;
    var score = document.getElementById("score").value;
  
    dataRef.push({
      firstname: firstname,
      secondname: secondname,
      id: id,
      score: score
    });
  }
  
  // Update data in the database
  function updateData() {
    var id = document.getElementById("id").value;
    var newScore = document.getElementById("score").value;
  
    dataRef.orderByChild("id").equalTo(id).once("value", function(snapshot) {
      snapshot.forEach(function(child) {
        child.ref.update({
          score: newScore
        });
      });
    });
  }
  
  // Delete data from the database
  function deleteData() {
    var id = document.getElementById("id").value;
  
    dataRef.orderByChild("id").equalTo(id).once("value", function(snapshot) {
      snapshot.forEach(function(child) {
        child.ref.remove();
      });
    });
  }
  
  // Get all data from the database
  function getAllData() {
    dataRef.on("value", function(snapshot) {
      snapshot.forEach(function(child) {
        console.log(child.val());
      });
    });
  }
    