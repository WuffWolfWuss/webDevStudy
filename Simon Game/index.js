var bColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var gameStart = false;
var level = 0;

function Sequence(){

  userPattern = [];
  level++;
  $("#level-title").text("Level "+ level);

  var rNum = Math.floor(Math.random() * 4);
  var rColor = bColor[rNum];
  gamePattern.push(rColor);

  $("#"+ rColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(rColor);
}

$(".btn").click(function(e){
  var userColourID = e.target.id;
  userPattern.push(userColourID);

  animatePres(userColourID);
  playSound(userColourID);

  checkAns(userPattern.length-1);
  // console.log(userPattern);
});

///// on KEYDOWN
$("body").keydown(function(){
  if(!gameStart){
    $("#level-title").text("Level "+ level);
    gameStart=true;
    Sequence();
  }
});

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePres(currentColour){
  $("#"+ currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed");
  }, 100);
}

function checkAns(currentLevel){
  if(gamePattern[currentLevel]===userPattern[currentLevel]){

    if (gamePattern.length === userPattern.length){
      setTimeout(function(){
        Sequence();
      }, 1000);
    }
  } else {
    $("#level-title").text("Game Over. Press Key to Restart!");

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 100);

    Over();
  }
}

function Over(){
  level = 0;
  gamePattern = [];
  gameStart = false;
}
