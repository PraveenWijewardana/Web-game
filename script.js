43ty35qy35y53y53q
tfyjutyytythythyhtthyg
yuhbyhhbhbhbhbhb
hyugtujyuju
trhtrhgrghthygr
rthrtrtrtyhr
rthyhygyhgryhr
yytyhghyhy
ytjytytjjy
ythyhtgytyth

function Controller(event) {
    if (event.key == "Enter") {
        if (runWorker == 0) {
            
            run();

            runSound.play();
            updateScore();
            moveBackground();
            flameMarginLeft.forEach(flameCreatAndMove);
            
            
        }
            
    }

    if (event.key == " ") {
        if (jumpWorker == 0) {
            if (runWorker !== 0) {
                clearInterval(runWorker);
                runSound.pause();
                jump();
                jumpSound.play();
            }

        }

    }
}

var runImage = 1;
var runWorker = 0;
var runSound = new Audio("run.mp3");
runSound.loop = true;

function run() {

    runWorker = setInterval(() => {
        runImage = runImage + 1;

        if (runImage == 9) {
            runImage = 1;
        }
        document.getElementById("boy").src = "run" + runImage + ".png";

    }, 150);

}

var jumpImage = 1;
var jumpWorker = 0;
var jumpSound = new Audio("jump.mp3");
var jumpMarginTop = "410";

function jump() {
    jumpWorker = setInterval(() => {
        jumpImage = jumpImage + 1;

        if (jumpImage < 8) {
            jumpMarginTop = jumpMarginTop - 10;
            document.getElementById("boy").style.marginTop = jumpMarginTop + "px";
        }

        if (jumpImage > 7) {
            jumpMarginTop = jumpMarginTop + 10;
            document.getElementById("boy").style.marginTop = jumpMarginTop + "px";
        }



        if (jumpImage == 13) {
            jumpImage = 1;
            clearInterval(jumpWorker);
            run();
            runSound.play();
            jumpWorker = 0;
        }

        document.getElementById("boy").src = "jump" + jumpImage + ".png"
    }, 100);

}
var score = 0;
var scoreWorker = 0;
function updateScore() {
    scoreWorker = setInterval(() => {
        score = score + 10;

        if (score == 3050) {
            alert("You won! Press Ok to Restart");
            window.location.reload();
        }

        document.getElementById("score").innerHTML = score;
    }, 100);

}

var backgroundX = 0;
var backGroundWorker = 0;
function moveBackground() {
    backGroundWorker = setInterval(() => {
        backgroundX = backgroundX - 10;
        document.getElementById("background").style.backgroundPositionX = backgroundX + "px";
    }, 50);
}

var deadImage = 1;
var deadWorker = 0;
var deadSound = new Audio("dead.mp3");
function dead() {
    deadWorker = setInterval(() => {
        deadImage = deadImage + 1;
        if (deadImage == 11) {
            deadImage = 1;
            clearInterval(deadWorker);
            alert("Game Over! Press Ok to Restart");
            window.location.reload();
        }

        document.getElementById("boy").src = "dead" + deadImage + ".png";
    }, 100);

}

var flameMarginLeft = [500, 1000, 1500,2000,2300,2700,3100,3400,3800,4200,4700,5100,5500,6000];
var flameWorker = 0;

function flameCreatAndMove(x) {
    var i = document.createElement("img");
    i.src = "flame.gif";
    i.className = "flame";
    i.style.marginLeft = x + "px";
    document.getElementById("background").appendChild(i);

    flameWorker = setInterval(() => {
        if (flameWorker !== 0) {
            x = x - 10;
            i.style.marginLeft = x + "px";

        }

        if (x == 170) {
            if (jumpWorker == 0) {

                clearInterval(runWorker);
                runSound.pause();

                clearInterval(scoreWorker);

                clearInterval(backGroundWorker);

                clearInterval(flameWorker);
                flameWorker = 0;

                dead();
                deadSound.play();

            }
        }

    }, 50);
}
