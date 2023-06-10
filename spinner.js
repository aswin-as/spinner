function myfunction() {
    var x = 1024;
    var y = 9999;
    
    var deg = Math.floor(Math.random() * (x - y)) + y;
    
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

    var element = document.getElementById('main');
    element.classList.remove('animate');
    setTimeout(function () {
        element.classList.add('animate');
    }, 3000);

    // Create new Audio object and set its src attribute to the sound file URL
    var audio = new Audio('mixkit-fast-bike-wheel-spin-1614.wav');

    // Play the audio
    audio.play();
}
