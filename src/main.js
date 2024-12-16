const hamberger = document.querySelector("#menu");
const Nav = document.querySelector(".nav_bar");
const navLinks = document.querySelectorAll(".nav_link");

hamberger.addEventListener("click", () => {
  hamberger.classList.toggle("ri-close-large-line");
  Nav.classList.toggle("left-[0]");
  if (hamberger.classList.contains("red")) {
    hamberger.classList.remove("red");
  } else {
    hamberger.classList.add("red");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamberger.classList.toggle("ri-close-large-line");
    Nav.classList.toggle("left-[0]");

    if (hamberger.classList.contains("red")) {
      hamberger.classList.remove("red");
    } else {
      hamberger.classList.add("red");
    }
  });
});

