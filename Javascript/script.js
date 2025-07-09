// Filter portfolio cards according to portfolio tabs 
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabsBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModels = document.querySelectorAll(".portfolio-container .card-with-model");

    portfolioTabsBtns.forEach((tabBtn) =>{
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModels.forEach((cardWithModel) =>{
                if (filter === "all" || cardWithModel.classList.contains(filter)) {
                    cardWithModel.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModel.style.opacity = "1";
                        cardWithModel.style.transition = ".5s ease";
                    }, 1);
                }
                else {
                  cardWithModel.classList.add("hidden");

                     setTimeout(() => {
                        cardWithModel.style.opacity = "0";
                        cardWithModel.style.transition = ".5s ease";
                    }, 1);
                }
            });
            // Add active class to the clicked tab button.
            portfolioTabsBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});

// Open/Close Portfolio Models
const portfolioCardsWithModels = document.querySelectorAll(".portfolio-container .card-with-model");

portfolioCardsWithModels.forEach((portfolioCardWithModel) => {
    const portfolioCard = portfolioCardWithModel.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModel.querySelector(".portfolio-model-backdrop");
    const portfolioModel = portfolioCardWithModel.querySelector(".portfolio-model");
    const modelCloseBtn = portfolioCardWithModel.querySelector(".model-close-btn");

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";

        setTimeout(() =>{
            portfolioBackdrop.classList.add("active");
        }, 300);

        setTimeout(() => {
            portfolioModel.classList.add("active");
        }, 300);
    });

    modelCloseBtn.addEventListener("click", () => {
        setTimeout(() =>{
            portfolioBackdrop.style.display = "none";
        }, 500);
        
        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModel.classList.remove("active");
        }, 100);
    });
});

// Slider 
 const testimonials = [
    {
      img: "assets/images/Client-Pics/client-img-3.jpg",
      name: "James Walker",
      role: "Marketing Manager",
      text: "They helped our startup with quick, scalable web solutions. Highly recommend their frontend skills!"
    },
    {
      img: "assets/images/Client-Pics/client-img-1.jpg",
      name: "Sophia Khan",
      role: "UI/UX Designer",
      text: "Working with this team was a wonderful experience. They delivered clean UI and perfect user interaction."
    },
    {
      img: "assets/images/Client-Pics/client-img-2.jpg",
      name: "Aria Collins",
      role: "Software Engineer",
      text: "Hi, I’m Aria Collins — a designer & developer dreaming to improve the world through products. I work with international clients."
    }
  ];

  let index = 0;

  function showTestimonial(i) {
    const t = testimonials[i];
    document.getElementById("testimonial").innerHTML = `
      <img src="${t.img}" alt="Client Photo">
      <div class="testimonial-content">
        <h3>${t.name}</h3>
        <p class="role">${t.role}</p>
        <p class="text">${t.text}</p>
      </div>
    `;
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  // Auto-slide every 7 seconds
  setInterval(nextTestimonial, 7000);

  // Service Model open/close function
  const serviceCardWithModels = document.querySelectorAll(".service-container .card-with-model");

  serviceCardWithModels.forEach((serviceCardWithModel) => {
    const serviceCard = serviceCardWithModel.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModel.querySelector(".service-model-backdrop");
    const modelCloseBtn = serviceCardWithModel.querySelector(".model-close-btn");
    const serviceModel = serviceCardWithModel.querySelector(".service-model");

    serviceCard.addEventListener("click", () => {
      serviceBackDrop.style.display = "flex";
      
      setTimeout(() =>{
        serviceBackDrop.classList.add("active");
      }, 100);
      
      setTimeout(() =>{
        serviceModel.classList.add("active");
      }, 300);
    });
    
    modelCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
        serviceBackDrop.style.display = "none";
      }, 500);

      setTimeout(() => {
        serviceBackDrop.classList.remove("active");
        serviceModel.classList.remove("active");
      }, 100);
    });
  });

  // Send/Receive emails from contact form = EmailJS
  (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "iiRRI3zTGFOQtHGT5",
            });
        })();

  sueContactForm = document.getElementById("sue-contact-form");
  sueContactFormAlert = document.querySelector(".contact-form-alert");

   sueContactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_uaa59zi', 'template_x2a48lm', '#sue-contact-form')
                    .then(() => {
                        // console.log('SUCCESS!');
                        sueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='fa-solid fa-circle-check'></i>";
                        sueContactForm.reset();

                        setTimeout(() => {
                          sueContactFormAlert.innerHTML = "";
                        }, 5000);
                      }, (error) => {
                        // console.log('FAILED...', error);
                        sueContactFormAlert.innerHTML = "<span>Message not sent</span> <i class='fa-solid fa-circle-exclamation'></i>";
                        sueContactFormAlert.title = error;
                    });
            });

// Each bottom navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;

  navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
    } else {
      document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
    }
  });
});

// Javascript to show bottom navigation menu on home(page load)
window.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.querySelector(".bottom-nav");
  
  bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home(scoll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
  bottomNav.classList.add("active");
  menuShowBtn.classList.remove("active");

  if(window.scrollY < 10) {
    menuHideBtn.classList.remove("active");

    function scrollStopped() {
      bottomNav.classList.add("active");
    }
    
    clearTimeout(navTimeout);
    navTimeout = setTimeout(scrollStopped, 2500);
  }
  
  if(window.scrollY > 10) {
    menuHideBtn.classList.add("active");

    function scrollStopped() {
      bottomNav.classList.remove("active");
      menuShowBtn.classList.add("active");
    }
    
    clearTimeout(navTimeout);
    navTimeout = setTimeout(scrollStopped, 2500);
  }
});

// Hide bottom navigation menu on click menu-hide-btn
menuHideBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.toggle("active");
  menuShowBtn.classList.toggle("active");
});

// Show bottom navigation menu on click menu-show-btn
menuShowBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.add("active");
  menuShowBtn.classList.toggle("active");
});

// To-top-button with scroll indicator bar
window.addEventListener("scroll", () => {
  const toTopBtn = document.querySelector(".to-top-btn");

  toTopBtn.classList.toggle("active", window.scrollY > 0);

  // Scroll Indicator Bar
  const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrollValue = (pageScroll / height) * 100;

  scrollIndicatorBar.style.height = scrollValue + "%";
});

// Scroll Reveal Animation
 const sr = ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
  });

  sr.reveal('#theme-toggle', { delay: 300, origin: 'top' });

// Scroll Sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // active navbar links 
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // active sections for animation on scroll
      sec.classList.add('show-animate');
    }
    // if want to use animation that repeats on scroll use this 
    else {
      sec.classList.remove('show-animate');
    }
  });

  // sticky header 
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Animated Footer on Scroll 
window.addEventListener('scroll', function () {
    let footer = document.querySelector('footer');
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
});

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Projects Section
 function openProject(url) {
      window.location.href = url;
    }
    


    const toggleBtn = document.getElementById("theme-toggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    }
  });