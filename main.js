const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slide = document.querySelector(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const titles = document.querySelectorAll(".title");
const descriptions = document.querySelectorAll(".description");
const totalSlides = slides.length;
let slideNumber = 0;

 async function fetching(){
 await fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let titlesData = data.map(item => item.title);
      const descriptionsData = data.map(item => item.body);
      renderImageInfo(titlesData, descriptionsData);
      showRandom(titlesData);
    }).catch(error => console.error('Error fetching data:', error));
  }
fetching();
function renderImageInfo(titlesData, descriptionsData) {
  slides.forEach((slide, index) => {
    titles[index].innerHTML = titlesData[index];
    descriptions[index].innerHTML = descriptionsData[index];
  });
}

function updateSlides() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

function nextSlide() {
  slideNumber++;
  if (slideNumber > totalSlides - 1) {
    slideNumber = 0;
  }
  updateSlides();
}

function previousSlide() {
  slideNumber--;
  if (slideNumber < 0) {
    slideNumber = totalSlides - 1;
  }
  updateSlides();
}

function autoplay() {
  playSlider = setInterval(() => {
    nextSlide();
    updateSlides();
  }, 4000);
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

//stop the autoplay on dblclick the img
slider.addEventListener("dblclick", () => {
  clearInterval(playSlider);
});

async function showRandom(titlesData) {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  document.getElementById("slide-img").src = "/images/" + randomNumber + ".jpg";
  updateSlides();

  console.log(titlesData);
  
      if(titlesData === true){
        titles[randomNumber] = titlesData[randomNumber];
      }
      else{
        console.log('error');
        console.log(titlesData[randomNumber]);
      }
}