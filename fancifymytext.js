function BiggerAlert() {
  alert("Hello, world!");
  document.getElementById("textInput").style.fontSize = "24pt";
}

function fancyShamncyStyles() {
  alert("Fancy Styling!");
  document.getElementById("textInput").style.fontWeight = "bold";
  document.getElementById("textInput").style.color = "blue";
  document.getElementById("textInput").style.textDecoration = "underline";
}

function boringBettyStyles() {
  alert("Boring Betty");
  document.getElementById("textInput").style.fontWeight = "normal";
  document.getElementById("textInput").style.color = "black";
  document.getElementById("textInput").style.textDecoration = "none";
}

function mooStyles() {
  alert("Moo Moo Meadow");
  var inputVal = document.getElementById("textInput");
  var newVal = inputVal.value + "-Moo";
  inputVal.value = newVal;
}

// document.getElementById("boring").addEventListener("select", boringBettyStyles);
