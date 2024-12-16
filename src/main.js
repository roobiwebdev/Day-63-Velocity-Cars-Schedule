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

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "200",
  reset: true,
});

sr.reveal(".nav__data, .footer__data");
sr.reveal(".home__data");
sr.reveal(".home__title", { scale: "0.5" });
sr.reveal(".white__car", { delay: "1100", distance: "800px", origin: "left" });

sr.reveal(".home__right", { distance: "400px", origin: "bottom" });
sr.reveal(".home__left", { distance: "-400px", origin: "bottom" });

sr.reveal(".explor__data");
sr.reveal(".red__car", { delay: "1100", distance: "-800px", origin: "left" });

sr.reveal(".home__right", { distance: "400px", origin: "bottom" });

sr.reveal(".cards", { distance: "100px" });
sr.reveal(".card1, .why__card1", {
  delay: 100,
  origin: "left",
  distance: "400px",
});
sr.reveal(".card2, .why__card2", {
  delay: 300,
  origin: "bottom",
  distance: "300px",
});
sr.reveal(".card3, .why__card3", {
  delay: 500,
  origin: "top",
  distance: "300px",
});
sr.reveal(".why__card4", { delay: 500, origin: "top", distance: "300px" });

sr.reveal(".try__data");

sr.reveal(".curve_car,.why__Carimg", { scale: "0.3", delay: "400" });

sr.reveal(".why__data");
