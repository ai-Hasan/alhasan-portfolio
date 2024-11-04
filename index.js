const text = "Full Stack Web Developer 👨‍💻🌐📊";
let index = 0;
const speed = 100;
// Function to handle animated text
function type() {
  if (index < text.length) {
    document.getElementById("animated-title").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      document.getElementById("animated-title").innerHTML = "";
      index = 0;
      setTimeout(type, 1000);
    }, 3000);
  }
}
window.onload = type;

// Scroll to top
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

//  swiper js
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 30,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // on: {
  //   autoplayTimeLeft(s, time, progress) {
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   },
  // },
});
