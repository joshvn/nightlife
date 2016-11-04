console.log("firebase.js ready to roll!")

// connect to the firebase db (database)

  var config = {
    apiKey: "AIzaSyDgBQAH3cg9judl6qPxXK_x_4G4dZ9dMoE",
    authDomain: "nightlife-app-3c76b.firebaseapp.com",
    databaseURL: "https://nightlife-app-3c76b.firebaseio.com",
    storageBucket: "nightlife-app-3c76b.appspot.com",
    messagingSenderId: "896895636963"
  };
  firebase.initializeApp(config);

// This is the whole DB
var database = firebase.database();

// we want to grab only the "people" part of the database
var peopleData = database.ref('venues');

// create a list of people
var peopleList = []; // empty list, for now

// load all the children of "people"
// keep listening to new children
peopleData.on('child_added', function(childData){
    // run this instruction for each child
//    console.table(childData.val() );
    var person = childData.val(); // extract the data about the person
    peopleList.push( person ); // add the person to the people list
})