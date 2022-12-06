clip = document.querySelector(".trailer");
header = document.querySelector(".header");

header.addEventListener("mouseover", function(e) {
    clip.pause();
});

header.addEventListener("mouseleave", function(e) {
    clip.play();
});

