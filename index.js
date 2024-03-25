const animatedTextElement = document.querySelector('.animated-text');
const texts = ['web developer', 'computer programmer', 'computer science student', 'future engineer'];
let currentIndex = 0;

function changeText() {
  animatedTextElement.textContent = '';
  const text = texts[currentIndex];
  let index = 0;
  const typing = setInterval(() => {
    animatedTextElement.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typing);
      animatedTextElement.classList.add('slide-animation'); // Add slide animation
      setTimeout(() => {
        deleteText();
      }, 1500);
    }
  }, 150);
  currentIndex = (currentIndex + 1) % texts.length;
}

function deleteText() {
  let index = animatedTextElement.textContent.length - 1;
  const deleting = setInterval(() => {
    animatedTextElement.textContent = animatedTextElement.textContent.slice(0, index);
    index--;
    if (index < 0) {
      clearInterval(deleting);
      animatedTextElement.classList.remove('slide-animation'); // Remove slide animation

      setTimeout(() => {
        changeText();
      }, 1000);
    }
  }, 50);
}

changeText();




 // Smooth scrolling
 (() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              e.preventDefault();
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
})();



// Simulate website loading
(() => {
  const loader = document.querySelector('.loader-wrapper');

  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1500); // Change 2000 to the desired delay time in milliseconds (here it's 2 seconds)
  }
})();



// ----------------------------------------------


  function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
      document.querySelector(".icon.open").style.display = "none";
      document.querySelector(".icon.close").style.display = "block";
    } else {
      x.classList.add("responsive");
      document.querySelector(".icon.open").style.display = "block";
      document.querySelector(".icon.close").style.display = "none";
    }
  }