// abrir e fechar menu ao ser clicado
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll(".toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// esconder menu ao clicar em algum item
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

// swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    991: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// scrollReveal: animar elementos ao rolar a página
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
);

// aplicar sombra no header ao rolar página
const header = document.querySelector("#header");
const navHeigth = header.offsetHeight;

function shadowInHeaderWhenScroll() {
  if (window.scrollY >= navHeigth) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// button back-to-top
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// menu ativo conforme seção vísivel na paǵina
const sections = document.querySelectorAll("main section[id]");

function activeteMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeigth = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeigth;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

// WhenScrollPage
window.addEventListener("scroll", () => {
  shadowInHeaderWhenScroll();
  backToTop();
  activeteMenuCurrentSection();
});
