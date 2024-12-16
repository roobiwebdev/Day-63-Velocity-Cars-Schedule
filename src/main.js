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

if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  sr.reveal(".home__data");
  sr.reveal(".head__data", { delay: 200 });
  sr.reveal(".home__img", { delay: 500, scale: 0.5 });

  sr.reveal(".service__card", { distance: "100px" });
  sr.reveal(".service__card_1", { delay: 100 });
  sr.reveal(".service__card_2", { delay: 300 });
  sr.reveal(".service__card_3", { delay: 500 });
  sr.reveal(".service__card_4", { delay: 700 });

  sr.reveal(".about__cont");
  sr.reveal(".about__leaf", { origin: "right" });
  sr.reveal(".about__item_img", { distance: "400px", origin: "left" });
  sr.reveal(".about__item_disc", { distance: "400px", origin: "right" });

  sr.reveal(".about__item2_img", { distance: "400px", origin: "right" });
  sr.reveal(".about__item2_disc", { distance: "400px", origin: "left" });

  sr.reveal(".popular__card", { distance: "100px" });
  sr.reveal(".popular__card_1", {
    delay: 100,
    origin: "left",
    distance: "400px",
  });
  sr.reveal(".popular__card_2", {
    delay: 300,
    origin: "bottom",
    distance: "300px",
  });
  sr.reveal(".popular__card_3", {
    delay: 500,
    origin: "top",
    distance: "300px",
  });
  sr.reveal(".popular__card_4", {
    delay: 700,
    origin: "right",
    distance: "400px",
  });

  sr.reveal(".customer__review");

  sr.reveal(".footer__cont");

}

