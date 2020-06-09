var dixie = document.getElementById("Dixie");
var rider = document.getElementById("Rider");
var adventure = document.getElementById("Adventure");




function play(id) {
    var play2 = id + "Play";
    var play3 = id + "Pause";
    var play = document.getElementById(play2);
    var pause = document.getElementById(play3);

    if (id == 'dixie') {
        dixie.play();
    } else if (id == 'rider') {
        rider.play();
    } else {
        adventure.play();
    }

    play.style.display = "none";
    pause.style.display = "inline-block";
}

function pause(id) {
    var play2 = id + "Play";
    var play3 = id + "Pause";
    var play = document.getElementById(play2);
    var pause = document.getElementById(play3);

    if (id == 'dixie') {
        dixie.pause();
    } else if (id == 'rider') {
        rider.pause();
    } else {
        adventure.pause();
    }

    play.style.display = "inline-block";
    pause.style.display = "none";
}