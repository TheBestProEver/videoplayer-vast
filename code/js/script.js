window.addEventListener('load', function() {
    var video = document.getElementById('video');
    var playButton = document.getElementById('play-pause');
    var seekBar = document.getElementById('seek-bar');
    var muteButton = document.getElementById('mute');
    var volumeBar = document.getElementById('volume-bar');
    var fullScreenButton = document.getElementById('full-screen');

    // Event listener for the play/pause button
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.textContent = 'Pause';
        } else {
            video.pause();
            playButton.textContent = 'Play';
        }
    });

    // Event listener for the seek bar
    seekBar.addEventListener('input', function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    // Update the seek bar as the video plays
    video.addEventListener('timeupdate', function() {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    // Event listener for the mute button
    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // Event listener for the volume bar
    volumeBar.addEventListener('input', function() {
        video.volume = volumeBar.value;
    });

    // Event listener for the full-screen button
    fullScreenButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); // IE/Edge
        }
    });
});
