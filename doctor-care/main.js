window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  changeNavOnScroll();
  showBackToTopButtonOnScroll();

  activeMenuArCurrentSection("home");
  activeMenuArCurrentSection("services");
  activeMenuArCurrentSection("about");
  activeMenuArCurrentSection("contact");
}

function activeMenuArCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // verificar se seção passou da linha
  // quais dados vou precisar?
  const sectionTop = document.getElementById(`${section}`).offsetTop;
  const sectionHeight = document.getElementById(`${section}`).offsetHeight;

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  // verificar se a base está abaixo da linha imáginaria alvo

  const sectionEndsAt = sectionTop + sectionHeight;

  // final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = document.getElementById(`${section}`).getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function changeNavOnScroll() {
  const navigation = document.querySelector("#navigation");

  scrollY > 10
    ? navigation.classList.add("scroll")
    : navigation.classList.remove("scroll");
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.querySelector("#backToTopButton");

  scrollY > 1299
    ? backToTopButton.classList.add("show")
    : backToTopButton.classList.remove("show");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

// ScrollReveal
ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 600,
  reset: true,
}).reveal(`
  #home .col-a, #home .col-b, #home .numbers,
  #services header, #services .card,
  #about .col-a header h4, #about .col-a header h2,
  #about .col-a .content p, #about .col-b,
  #contact .col-a header, #contact .col-a .content li,
  #contact .col-a .button, #contact .col-b,
  footer .logo, footer p, footer .social-links`);
