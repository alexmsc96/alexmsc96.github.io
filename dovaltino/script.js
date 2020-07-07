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
