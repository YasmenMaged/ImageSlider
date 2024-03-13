const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const totalSlides = slides.length;
let slideNumber = 0;

function updateSlides(){
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active"); 
  });
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

function nextSlide(){
  slideNumber++;
  if(slideNumber > (totalSlides - 1) ){
    slideNumber = 0;
  }
  updateSlides();
} 

function previousSlide(){
  slideNumber--;
  if(slideNumber < 0 ){
    slideNumber = totalSlides - 1;
  }
  updateSlides();
}

function autoplay(){
  playSlider = setInterval(() => {
    nextSlide();
    updateSlides();
  }, 4000)
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

//stop the autoplay on dblclick the img
slider.addEventListener("dblclick", () => {
  clearInterval(playSlider);
});

function showRandom(){
  let randomNumber = Math.floor((Math.random()*6)+1);
  document.getElementById("slide-img").src = "/images/"+ randomNumber + ".jpg";
}