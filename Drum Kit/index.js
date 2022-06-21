
var i = 0;
while(i < document.querySelectorAll(".drum").length){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    checkNote(this.innerHTML);
    buttonAnimation(this.innerHTML);
});
    i++;
}

document.addEventListener("keydown", function(event){
  checkNote(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(note){
  var activeButton =  document.querySelector("." + note);
  activeButton.classList.toggle("pressed");
  setTimeout(function() {
    activeButton.classList.toggle("pressed");
  }, 100);
}

function checkNote(note){
  switch (note) {
    case "w":
        var cr = new Audio("sounds/crash.mp3");
        cr.play();
      break;
    case "a":
        var ki = new Audio("sounds/kick-bass.mp3");
        ki.play();
      break;
    case "s":
        var sn = new Audio("sounds/snare.mp3");
        sn.play();
      break;
    case "d":
        var t1 = new Audio("sounds/tom-1.mp3");
        t1.play();
      break;
    case "j":
        var t2 = new Audio("sounds/tom-2.mp3");
        t2.play();
      break;
    case "k":
        var t3 = new Audio("sounds/tom-3.mp3");
        t3.play();
      break;
    case "l":
        var t4 = new Audio("sounds/tom-4.mp3");
        t4.play();
      break;

    default: console.log(this.innerHTML);
  }
}
// var audio = new Audio("sounds/crash.mp3");
// audio.play();
