
// GALERY SLIDE
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// FULL SCREEN IMAGE PREVIEW
function full_view(ele) {
    let src = ele.parentElement.querySelector(".img-source").getAttribute("src");
    document.querySelector("#img-viewer").querySelector("img").setAttribute("src", src);
    document.querySelector("#img-viewer").style.display = "block";
    document.body.style.overflow = 'hidden';
}

function close_model() {
    document.querySelector("#img-viewer").style.display = "none";
    document.body.style.overflow = 'visible';
}


// DROPDOWN LIST CLOSE
document.addEventListener('DOMContentLoaded', function () {
    // const dropdown = document.querySelector('.dropdown-list');
    const links = document.querySelectorAll('.dropdown-list a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            const checkbox = document.querySelector('#lista');
            checkbox.checked = false;
        });
    });
});