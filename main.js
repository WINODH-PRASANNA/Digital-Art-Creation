const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});


// Add this to your existing main.js
const galleryBtn = document.querySelector(".gallery__btn .btn");
const galleryGrid = document.querySelector(".gallery__grid");
const galleryImages = document.querySelectorAll(".gallery__grid img");

// Initially hide all but first 8 images
galleryImages.forEach((img, index) => {
  if (index >= 8) {
    img.style.display = "none";
  }
});

let showAll = false;

galleryBtn.addEventListener("click", () => {
  showAll = !showAll;

  if (showAll) {
    // Show all images
    galleryImages.forEach(img => {
      img.style.display = "block";
    });
    galleryBtn.textContent = "VIEW LESS";
  } else {
    // Show only first 8 images
    galleryImages.forEach((img, index) => {
      img.style.display = index < 8 ? "block" : "none";
    });
    galleryBtn.textContent = "VIEW GALLERY";
  }

  // Trigger a reflow to ensure smooth animation
  galleryGrid.offsetHeight;
});



// pop up window
document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const openBtn = document.getElementById('openPopup');
  const closeBtn = document.getElementById('closePopup');

  // Open popup when button is clicked
  openBtn.addEventListener('click', function () {
    popup.style.display = 'flex';
  });

  // Close popup when X button is clicked
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  // Close popup when clicking outside the content
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Close popup when pressing Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      popup.style.display = 'none';
    }
  });
});