// Get modal elements
let cartModal = document.getElementById("simpleCartModal");
let accountModal = document.getElementById("simpleAccountModal");

// Get open modal btns
let cartModalBtn = document.getElementById("cartModalBtn");
let accountModalBtn = document.getElementById("accountModalBtn");
// Get close btn
let closeBtn = document.getElementById("closeBtn");
let accoutCloseBtn = document.getElementById("accoutCloseBtn");

// Listen for open click
cartModalBtn.addEventListener("click", openCartModal);
accountModalBtn.addEventListener("click", openAccountModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeAccountModal);
// Listen for outside click
window.addEventListener("click", closeModal);
window.addEventListener("click", closeAccountModal);

// Function to open modal
function openAccountModal() {
  accountModal.style.display = "block";
}

function openCartModal() {
  cartModal.style.display = "block";
}

// Function to close modal
function closeModal(e) {
  if (e.target == cartModal || e.target == closeBtn) {
    cartModal.style.display = "none";
  }
}

function closeAccountModal(e) {
  if (e.target == accountModal || e.target == accoutCloseBtn) {
    accountModal.style.display = "none";
  }
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle Nav

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
