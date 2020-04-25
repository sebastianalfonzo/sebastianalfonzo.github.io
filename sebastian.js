function abo() {
  document.getElementById("abo").style.display = "block";
  document.getElementById("vid").style.display = "none";
  document.getElementById("gal").style.display = "none";
  alert("end")
}

function vid() {
  alert("begin")
  document.getElementById("abo").style.display = "none";
  document.getElementById("vid").style.display = "block";
  document.getElementById("gal").style.display = "none";
}

function gal() {
  document.getElementById("abo").style.display = "none";
  document.getElementById("vid").style.display = "none";
  document.getElementById("gal").style.display = "block";
}
