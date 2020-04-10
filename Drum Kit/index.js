var audio;
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var p = this.textContent;
    makeSound(p);
    buttonAnimation(p);
  });
}
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(p) {
  if (p === "w") {
    audio = new Audio('sounds/crash.mp3');
    audio.play();
  }
  if (p === "a") {
    audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  }
  if (p === 's') {
    audio = new Audio('sounds/snare.mp3');
    audio.play();
  }
  if (p === 'd') {
    audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
  if (p === 'j') {
    audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  }
  if (p === 'k') {
    audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }
  if (p === 'l') {
    audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }
}
function buttonAnimation(currentKey)
{
  var pressedButton=document.querySelector("."+currentKey);
  pressedButton.classList.add("pressed");
  setTimeout(function(){pressedButton.classList.remove("pressed");},100);
}
