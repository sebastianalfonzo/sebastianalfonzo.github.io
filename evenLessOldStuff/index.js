function resizeIframe(obj) {
    console.log(obj.style.width);
}

function vidHideShowIndexAbout() {
  var vid = document.getElementById("vidButtons");
  var gal = document.getElementById("galButtons");
  if (vid.style.display === "none") {
    vid.style.display = "block";
    gal.style.display = "none";
  } else {
    vid.style.display = "none";
  }
}

function galHideShowIndexAbout() {
  var gal = document.getElementById("galButtons");
  var vid = document.getElementById("vidButtons");
  if (gal.style.display === "none") {
    gal.style.display = "block";
    vid.style.display = "none";
  } else {
    gal.style.display = "none";
  }
}

  function vidHideShow() {
    var vid = document.getElementById("vidButtons");
    var gal = document.getElementById("galButtons");
    if (vid.style.display === "none") {
      vid.style.display = "block";
    } else {
      vid.style.display = "none";
    }
  }

  function galHideShow() {
    var gal = document.getElementById("galButtons");
    var vid = document.getElementById("vidButtons");
    if (gal.style.display === "none") {
      gal.style.display = "block";
    } else {
      gal.style.display = "none";
    }
}
