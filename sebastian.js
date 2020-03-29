function bio() {
  var b = document.getElementbyId("bio");
  var p = document.getElementbyId("pro");
  var c = document.getElementbyId("cas");
  b.style.display = "block";
  p.style.display = "none";
  c.style.display = "none";
}

function pro() {
  var b = document.getElementbyId("bio");
  var p = document.getElementbyId("pro");
  var c = document.getElementbyId("cas");
  b.style.display = "none";
  p.style.display = "block";
  c.style.display = "none";
}

function cas() {
  var b = document.getElementbyId("bio");
  var p = document.getElementbyId("pro");
  var c = document.getElementbyId("cas");
  b.style.display = "none";
  p.style.display = "none";
  c.style.display = "block";
}
