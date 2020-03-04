var slideIndex = 1;
showSlides(slideIndex)

function nextSlide(n) {
    clearInterval(myTimer);
    if (n < 0){
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
    if (n === -1){
      myTimer = setInterval(function(){nextSlide(n + 2)}, 4000);
    } else {
      myTimer = setInterval(function(){nextSlide(n + 1)}, 4000);
    }
  }

function currentSlide(n) {
    clearInterval(myTimer);
  myTimer = setInterval(function(){nextSlide(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("theSlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
  
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){nextSlide(1)}, 4000);
})


pause = () => {
    clearInterval(myTimer);
 }

 resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){nextSlide(slideIndex)}, 4000);
 }