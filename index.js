function about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#3D7AB8";
  document.getElementById("vidButton").style.color = "#122A68";
  document.getElementById("galButton").style.color = "#122A68";
}

function videography() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "block";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#122A68";
  document.getElementById("vidButton").style.color = "#3D7AB8";
  document.getElementById("galButton").style.color = "#122A68";
}

function gallery() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "block";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#122A68";
  document.getElementById("vidButton").style.color = "#122A68";
  document.getElementById("galButton").style.color = "#3D7AB8";
}

function welcome() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#122A68";
  document.getElementById("vidButton").style.color = "#122A68";
  document.getElementById("galButton").style.color = "#122A68";
}

function sekrit() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "block";
  document.getElementById("aboutButton").style.color = "#122A68";
  document.getElementById("vidButton").style.color = "#122A68";
  document.getElementById("galButton").style.color = "#122A68";
}
