

//When we click start, we will write "once upon a time" into our story duv
var waitingSound = new Audio('sound/waiting.mp3')
var thomasSound = new Audio ('sound/thomas.mp3')
var marioSound = new Audio ('sound/mario.mp3')

document.querySelector(".start-btn").addEventListener
("click", function() {
    waitingSound.play();
    //1. Write the intro to our story 
    document.querySelector(".story").innerHTML = 
    "<p> On his way to the witch's house, he sees a angry man is about to hit his wife, so he turns this man into a goat. The goat runs away and the woman wants to give him a flying broom as a gift. Do you accept the broom?</p> ";
    //2. Remove start button
    document.querySelector(".start-btn").classList.add("invisible");
    //3.show our next button 
    document.querySelector(".accept-btn").classList.remove("invisible");
    document.querySelector(".deny-btn").classList.remove("invisible");
    document.querySelector(".container").classList.add("village-bg")
    document.querySelector(".image").innerHTML= "<img src=https://media2.giphy.com/media/8ciVamiwLL1Tk7VEn5/giphy.gif> "
    // functions are simply a list of commands to do 
});



//secone page stuff

document.querySelector(".accept-btn").addEventListener
("click", function() {
    waitingSound.pause();
    thomasSound.play();
    //1. Write the intro to our story  (add image inside innderHTML, after p)
    document.querySelector(".story").innerHTML = 
    "<p>You decided to accept the magic broom, because an almighty wizard thinks he looks good on the broom. You continue your journey on the magical broom. You are taking a shortcut and you run into the evil witch about to torture someone! Do you want to use your spell?</p>";
    //2. Remove button
    document.querySelector(".accept-btn").classList.add("invisible");
    document.querySelector(".deny-btn").classList.add("invisible");
    //3.show our next button 
    document.querySelector(".use-spell-btn").classList.remove("invisible");
    document.querySelector(".do-not-use-spell-btn").classList.remove("invisible");
    document.querySelector(".container").classList.add("village-bg");
    document.querySelector(".image").innerHTML="<img src=https://media2.giphy.com/media/10qrOMGvVJ5hLi/source.gif>"
    
});

document.querySelector(".deny-btn").addEventListener
("click", function() {
    waitingSound.pause();
    thomasSound.pause();
    document.querySelector(".story").innerHTML = "<p>You decided to deny the magic broom, because a cool wizard need a customized broom. Suddenly, you hear someone screaming! You have to get there fast! What should you do?</p>";
    document.querySelector(".accept-btn").classList.add("invisible");
    document.querySelector(".deny-btn").classList.add("invisible");
    document.querySelector(".turn-btn").classList.remove("invisible");
    document.querySelector(".run-btn").classList.remove("invisible");
    document.querySelector(".container").classList.add("kingdom-bg");
    document.querySelector(".image").innerHTML="<img src=https://i.pinimg.com/originals/40/a7/ce/40a7ce0c82bf348eccedea0cb724853e.gif>"
});

document.querySelector(".turn-btn").addEventListener
("click",function(){
    marioSound.play();
    document.querySelector(".story").innerHTML = 
    "<p>You lose! It is a test by the Great Merlin. Now he is turning you into a horse!</p>"
    document.querySelector(".turn-btn").classList.add("invisible");
    document.querySelector(".run-btn").classList.add("invisible");
    document.querySelector(".container").classList.add("kingdom-bg");
    document.querySelector(".image").innerHTML="<img src=https://media1.tenor.com/images/605f89878dfdba790d4f025888503f06/tenor.gif?itemid=12138451>"
 
});

document.querySelector(".run-btn").addEventListener
("click",function(){
    marioSound.play();
    document.querySelector(".story").innerHTML = 
    "<p>You passed the test! The horse is King Dino, so you are awarded customized broom made just for you! </p>"
    document.querySelector(".turn-btn").classList.add("invisible");
    document.querySelector(".run-btn").classList.add("invisible");
    document.querySelector(".container").classList.add("kingdom-bg");
    document.querySelector(".image").innerHTML="<img src=https://media3.giphy.com/media/jxD2qUCuJ4XM4/giphy.gif>"
});

//page 3 stuff
document.querySelector(".use-spell-btn").addEventListener
("click",function(){
    thomasSound.pause();
    document.querySelector(".story").innerHTML ="<p>Congradulation! You defeat the evil witch! King Dino has invited you over for dinner! You are a now confer the title of Dino Duke!</p>"
    document.querySelector(".use-spell-btn").classList.add("invisible");
    document.querySelector(".do-not-use-spell-btn").classList.add("invisible");
    document.querySelector(".container").classList.add("kingdom-bg");
    document.querySelector(".image").innerHTML="<img src=https://media1.tenor.com/images/3a09975c157f34744f0409b216263995/tenor.gif?itemid=3494891>";
});

document.querySelector(".do-not-use-spell-btn").addEventListener
("click",function(){
    thomasSound.pause();
    document.querySelector(".story").innerHTML ="<p>Game Over! The evil witch is too strong to kill.</p>"
    document.querySelector(".use-spell-btn").classList.add("invisible");
    document.querySelector(".do-not-use-spell-btn").classList.add("invisible");
    document.querySelector(".container").classList.add("kingdom-bg");
    document.querySelector(".image").innerHTML="<img src=https://media0.giphy.com/media/JB38F3WykfLIk/giphy.gif>";
});

