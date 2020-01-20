let lastScrollTop = 0;

let lastScrollFromTop = window.pageYOffset;

const header = document.querySelector(".header");

window.addEventListener("scroll", e => {
  if (window.pageYOffset > lastScrollTop) {
    header.classList.remove("scroll");
  } else {
    header.classList.add("scroll");
  }

  if (window.pageYOffset > 0) {
      header.classList.add('shadow')
  } else {
      header.classList.remove('shadow')
  }

  lastScrollTop = window.pageYOffset;
});
