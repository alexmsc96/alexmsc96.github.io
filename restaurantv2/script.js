const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
mybutton = document.querySelector(".btn");

const sectionOneOptions = { rootMargin: "-80% 0px 0px 0px" };

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      mybutton.classList.add("btn-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
      mybutton.classList.remove("btn-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
