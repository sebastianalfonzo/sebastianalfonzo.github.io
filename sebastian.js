function abo() {
  document.getElementbyId("abo").style.display = "block";
  document.getElementbyId("vid").style.display = "none";
  document.getElementbyId("gal").style.display = "none";
  alert("end")
}

function vid() {
  alert("begin")
  document.getElementbyId("abo").style.display = "none";
  document.getElementbyId("vid").style.display = "block";
  document.getElementbyId("gal").style.display = "none";
}

function gal() {
  document.getElementbyId("abo").style.display = "none";
  document.getElementbyId("vid").style.display = "none";
  document.getElementbyId("gal").style.display = "block";
}
