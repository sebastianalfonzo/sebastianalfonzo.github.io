function about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#F6828C";
  document.getElementById("vidButton").style.color = "#F5B0CB";
  document.getElementById("galButton").style.color = "#F5B0CB";
}

function videography() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "block";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#F5B0CB";
  document.getElementById("vidButton").style.color = "#F6828C";
  document.getElementById("galButton").style.color = "#F5B0CB";
}

function gallery() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "block";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#F5B0CB";
  document.getElementById("vidButton").style.color = "#F5B0CB";
  document.getElementById("galButton").style.color = "#F6828C";
}

function welcome() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("aboutButton").style.color = "#F5B0CB";
  document.getElementById("vidButton").style.color = "#F5B0CB";
  document.getElementById("galButton").style.color = "#F5B0CB";
}

function sekrit() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "block";
  document.getElementById("aboutButton").style.color = "#F5B0CB";
  document.getElementById("vidButton").style.color = "#F5B0CB";
  document.getElementById("galButton").style.color = "#F5B0CB";
}
