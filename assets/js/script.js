// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/**
 * Music file setup
 */
let bgmusic = document.getElementById('bgMusic');
bgmusic.volume = 0.5;
bgmusic.loop = true;
let soundOn = false;

/**
 * Toggle on and off background music
 */
function musicControl() {
  soundOn = !soundOn;
  if (soundOn) {
    bgmusic.play();
    document.getElementById("music-on").classList.add('hide');
    document.getElementById("music-off").classList.remove('hide');
  } else {
    bgmusic.pause();
    document.getElementById("music-off").classList.add('hide');
    document.getElementById("music-on").classList.remove('hide');
  }
}
