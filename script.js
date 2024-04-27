// STEP 2: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Define an object called 'helloSpeaker' with a method called 'speak'
// which takes one argument 'name'. When the method is called, it returns
// a string as follows: "Hello, " + the name passed in.
var helloSpeaker = {
  speak: function(name) {
    return "Hello, " + name;
  }
};

// STEP 3: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Define an object called 'byeSpeaker' with a method called 'speak'
// which takes one argument 'name'. When the method is called, it returns
// a string as follows: "Good Bye, " + the name passed in.
var byeSpeaker = {
  speak: function(name) {
    return "Good Bye, " + name;
  }
};

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1
for (var i = 0; i < names.length; i++) {

  // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter === 'j') {
    console.log(byeSpeaker.speak(names[i]));
  } else {
    console.log(helloSpeaker.speak(names[i]));
  }
}

})();