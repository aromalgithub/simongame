// alert("Hello this is a Simon Game")
var buttonColor = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;

// setInterval(() => {
//     $('h1').html('Level ' + level);
//     level++;
// }, 2000);
if (level === 0) {
    $(document).keypress(handleKeypress);

}
function handleKeypress() {
    nextSequence();
    $(document).unbind("keypress");
}



function nextSequence() {
    var randomNum = Math.floor(3 * Math.random());
    var randomChooseColor = buttonColor[randomNum];
    // console.log(randomChooseColor);
    gamePattern.push(randomChooseColor);
    // $('#' + randomChooseColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // var btn = $("#" + randomChooseColor);
    // animatePress(btn);
    setTimeout(() => {
        playSound(randomChooseColor);
    }, 1000);

    // this is the audio played for the randomChooseColor by the computer

    $('h1').html('Level ' + ++level);
}

$(".btn").click(function () {
    if (level == 0) return;
    var userChoosenColor = $(this).attr('id');
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    checkAnswer(level);
});

function playSound(color) {
    var btn = $('#' + color);
    // btn.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
    btn.addClass('pressed');
    setTimeout(() => {
        btn.removeClass('pressed');
    }, 100
    );
}

function checkAnswer(currentLevel) {
    var index = userClickedPattern.length - 1;
    if (gamePattern[index] === userClickedPattern[index]) console.log("Success");
    else {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $('body').addClass('game-over')
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 100);
        $('h1').html('Game Over Refresh')
        return;
    }

    if (index === currentLevel - 1) {
        userClickedPattern = [];
        nextSequence();
    }
}
// functionanimatePress(btn){
//     btn.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// }