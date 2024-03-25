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
     
    } else {
      x.classList.add("responsive");
    }
  }


  // --------------------



  const productData = [
    {
      id: 1,
      imageurl:
        "https://www.pageworks.co.uk/client/assets/templates/palas/images/demo/Responsive-Laptop-iPads-iPhone-400x300.jpg",
      name: "my first website.",
      projectLink: "https://dev-musaddik.github.io/musaddik/",
      description:
        "CreatingCreating my first responsive website was an exciting and challenging endeavor."},
        {
          id: 2,
          imageurl: "https://preview.redd.it/ae60rao98ts91.png?width=640&crop=smart&auto=webp&s=79b4b07de5b6cfa533a1c154e706db95fb7a28ac",
          name: "My First MERN Stack E-Commerce Website",
          projectLink: "https://ema-jhon-musaddik.web.app/",
          description: "This is my first e-commerce website created using the MERN stack. It features a variety of products, user authentication, shopping cart functionality, and secure payment processing.",
        },
    {
      id: 3,
      imageurl:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1682778016105/2e4240a8-d249-4378-844f-eb4a00c80acb.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      name: "Cube Css Project",
      projectLink: "https://dev-musaddik.github.io/css-project-one/",
      description: "A beautiful Css project . CSS 3D Glowing Cube Animation Effects - Ambient Light Effects",
    },
    {
      id: 4,
      imageurl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg",
      name: "My First E-Commerce Website",
      projectLink: "https://first-e-commerce-musaddik.vercel.app/",
      description: "My first e-commerce website created using React. This project includes various features such as product listing, shopping cart, and checkout functionality.",
    },
    { id: 5,
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIRp8Ut1lXF02e6YT7Rs1BVA_N8e1aA0XJg&usqp=CAU",
      name: "PasswordChecker ",
      projectLink: "https://dev-musaddik.github.io/PasswordChecker/",
      description: "It is important to choose passwords wisely. Check how strong and secure is your password. Improve the strength of your password to stay safe.",
    },
    {
      id: 6,
      imageurl:
        "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/html-projects-800x431.jpg",
      name: "Friend Love Money?",
      projectLink: "https://dev-musaddik.github.io/relationship-between-frinds-love-money/",
      description: "The title of this volume is aptly Love, Money and Friendships.",
    },
    
     
    {
      id: 7,
      imageurl:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200121234029/Top-10-Projects-For-Beginners-To-Practice-HTML-and-CSS-Skills.jpg",
      name: "My bank project",
      projectLink: "https://dev-musaddik.github.io/MusaddikBank/",
      description: "A web application used to tranfer virtual money between multiple users and also record the banking transactions",
    },
    {
      id: 8,
      imageurl:
        "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-9907.jpg",
      name: "My iphone project",
      projectLink: "https://dev-musaddik.github.io/iphones/",
      description: "I'm going to create an Apple iPhone like User Interface (UI) design using HTML and CSS.",
    },
   
   
    
    
  ]; 

  document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.getElementById("project-container");
  
    // Loop through productData array and create project cards
    productData.forEach(function(project) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("img");
      image.src = project.imageurl;
      card.appendChild(image);
  
      const title = document.createElement("h3");
      title.textContent = project.name;
      card.appendChild(title);
  
      const description = document.createElement("p");
      description.textContent = project.description;
      card.appendChild(description);
  
      const link = document.createElement("a");
      link.href = project.projectLink;
      link.textContent = "View Project";
      card.appendChild(link);
  
      projectContainer.appendChild(card);
    });
  });
  