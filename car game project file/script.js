let cross=true;
let score=0;
audio = new Audio('sound.mp3');

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        car = document.querySelector('.car');
        car.classList.add('animatecar');
        setTimeout(() => {
            car.classList.remove('animatecar')
        }, 700);
    }
    if (e.keyCode == 39) {
        car = document.querySelector('.car');
        carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = carX + 150 + "px";
    }
    if (e.keyCode == 37) {
        car = document.querySelector('.car');
        carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = (carX - 150) + "px";
    }
}
setInterval(() => {
    car = document.querySelector('.car');
    gameover = document.querySelector('.gameover');
    pathole = document.querySelector('.pathole');
    track=document.querySelector('.track');
    baground=document.querySelector('.baground');
    // score=document.querySelector('.score');

    dx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(car, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(pathole, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(pathole, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY,dy,oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 100 && offsetY < 100) {
        gameover.innerHTML = "Game Over - Reload to Play Again"
        baground.classList.remove('bagroundAni');
        pathole.classList.remove('patholeAni');
        track.classList.remove('trackAni');
        wheel.classList.remove('wheelAni');
        audiogo.play();
        setTimeout(() => {
            
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 100 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
       let aniDur=parseINT(window.getComputedStyle(patholeAni,null).getPropertyValue('AnimationDuration'));
        console.log(score)
    setInterval(() => {
        if(aniDur>5){
            newDur=  aniDur-0.2;
            patholeAni.style.AnimationDuration=newDur+'s';
  
          }
      
    }, 500);    

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}

