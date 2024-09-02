// let images = [
//   "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
//   "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
//   "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
// ];

// let container = document.querySelector(".image-container");
// let image = document.querySelector(".image");

// setInterval(() => {
//   let randomNo = () => {
//     let random = Math.random() * images.length;
//     let floor = Math.floor(random);
//     return floor;
//   };
//   image.style.transition = "2s all";
//   image.src = images[randomNo()];
// }, 3000);

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;

  slides.style.transform = `translateX(${offset}%)`;
}

// Initialize the slider
moveSlide(0);
