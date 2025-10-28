function NewTab(url) {
  window.open(url, "_blank",
   "width=960, height=540");
}

function play() {
  var audio = document.getElementById("audio");
    audio.play();
}

const blurredText = document.querySelector('.blurred-text');

if (blurredText) {
  blurredText.addEventListener('mouseover', () => {
    blurredText.style.filter = 'blur(0px)';
  });

  blurredText.addEventListener('mouseout', () => {
    blurredText.style.filter = 'blur(5px)';
  });
}