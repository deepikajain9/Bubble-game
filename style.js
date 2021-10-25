var timer = 60 ;
var score = 0;
var timerelem = document.querySelector("#timerelem");
var hitelem = document.querySelector("#hitelem");
var bottompanel = document.querySelector("#bottompanel");
var scoreelem = document.querySelector("#scoreelem");

var guessNumber;

setInterval(function(){
    if(timer>0){
        --timer ; 
     timerelem.textContent = timer ;
    }
    else{
        bottompanel.innerHTML = '<h1 id="center">Game Over</h1>';
    }
},1000);

function getNewguess(){
    //get a random number &
    // then place the random number inside the game guess element
    guessNumber = Math.floor(Math.random()*10);
    hitelem.textContent = guessNumber ;
}

function makebubbles(){
    for(var i=0;i<200; i++){
        var randomNumber = Math.floor(Math.random()*10);
        var tamplate = `<div class="bubble">${randomNumber}</div>` ;
        bottompanel.innerHTML += tamplate;
    }
}
bottompanel.addEventListener("click", function(details){
    var clickedbubblevalue = details.target.textContent;
    if(clickedbubblevalue == guessNumber){
        score = score+10;
        scoreelem.textContent = score;
        getNewguess();
        bottompanel.innerHTML = "";
        makebubbles();
    }
    else{
        score = score-10 ;
        scoreelem.textContent = score;
        getNewguess();
        bottompanel.innerHTML = "";
        makebubbles();
    }

})

getNewguess();
makebubbles();

