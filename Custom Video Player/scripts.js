// Get Our Elements...
const player = document.querySelector('.player');
const video = player.querySelector('.viewer'); //try document. here too
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');

//  Gotta use querySelectorAll here cause there are two data-skip attrs...
const skipButtons = player.querySelectorAll('[data-skip]');
// console.log(skipButtons); // see what it is ^ 

const range = player.querySelector('.player__slider');



// Build our fns
function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}



// Hook up event listeners 