console.log("Welcome To Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("/mp3/06-Goldbergs_Theme_Invasion_Arena_Effects_EXTENDED(256k).mp3.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Ghungroo", filePath: "/mp3/01 - Ghungroo - Musicbadshah.Org.mp3.mp3", coverPath: "./goldberg.jpg" },
    { songName: "Ik Vaari", filePath: "/mp3/02 - Jai Jai Shivshankar - War (2019).mp3.mp3", coverPath: "./goldberg.jpg" },
    { songName: "Sycho Saiyaan", filePath: "/mp3/03 - Ik Vaari Aa - DownloadMing.SE.mp3.mp3", coverPath: "./goldberg.jpg" },
    { songName: "Mechanical", filePath: "/mp3/04 - Psycho Saiyaan - Saaho (2019).mp3.mp3", coverPath: "./goldberg.jpg" },
    { songName: "Jai Jai Shiv Shankar", filePath: "/mp3/05 - Mechanical Sundariye - MusicBadshah.Com.mp3.mp3", coverPath: "./goldberg.jpg" },
    { songName: "Goldberg Theme", filePath: "/mp3/06-Goldbergs_Theme_Invasion_Arena_Effects_EXTENDED(256k).mp3.mp3", coverPath: "./goldberg.jpg" },
    { songName: "Goldberg Theme", filePath: "/mp3/06.mp3.mp3", coverPath: "./goldberg.jpg" }
]


songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagname("img")[0].src = songs[i].coverPath;
    element.getElementsByClassname("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seeker
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})