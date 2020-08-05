function hideShow(element) {
  hideElements();
  document.getElementById(element).style.display = "block";

  if (element === "videography") {
    document.getElementById("vidButton").style.color = "#3D7AB8";
  }
  else if (element === "gallery") {
    document.getElementById("galButton").style.color = "#3D7AB8";
  }
  else if (element === "about") {
    document.getElementById("aboutButton").style.color = "#3D7AB8";
  }
}

function hideElements() {
  document.getElementById("about").style.display = "none";
  document.getElementById("videography").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("welcome").style.display = "none";
  document.getElementById("sekrit-zone").style.display = "none";
  document.getElementById("vid1").style.display = "none";
  document.getElementById("vid2").style.display = "none";
  document.getElementById("gal1").style.display = "none";
  document.getElementById("gal2").style.display = "none";
  document.getElementById("gal3").style.display = "none";
  document.getElementById("gal4").style.display = "none";
  document.getElementById("aboutButton").style.color = "#122A68";
  document.getElementById("vidButton").style.color = "#122A68";
  document.getElementById("galButton").style.color = "#122A68";

}
